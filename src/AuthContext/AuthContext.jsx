import React, { createContext, useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../Firebase/Firebase";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Register with displayName & photoURL
  const createUser = (email, password, displayName, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        return updateProfile(result.user, {
          displayName,
          photoURL,
        }).then(() => result); // updated user return
      })
      .finally(() => setLoading(false));
  };

  // 🔹 Login with email/password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 🔹 Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // 🔹 Google Sign-In
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .finally(() => setLoading(false));
  };

  // 🔹 Forget Password
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email)
      .finally(() => setLoading(false));
  };

  // 🔹 User state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    resetPassword, // add forget password function
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
