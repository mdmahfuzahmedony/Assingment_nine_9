import {
  initializeApp
} from "firebase/app";
import {
  getAuth
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBxU1MujWR9ExP7kwsikqZF3pF6TKZ_vB4",
  authDomain: "assignmentnine-66e84.firebaseapp.com",
  projectId: "assignmentnine-66e84",
  storageBucket: "assignmentnine-66e84.firebasestorage.app",
  messagingSenderId: "435128393789",
  appId: "1:435128393789:web:bb16d57bd24e084a054a54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app