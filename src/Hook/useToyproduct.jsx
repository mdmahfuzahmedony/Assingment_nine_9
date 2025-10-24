import axios from "axios";
import {
  useEffect,
  useState
} from "react";

const useToyproduct = () => {
  const [toyP, setToyP] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    axios("/toy.json")
      .then((res) => {
        setToyP(res.data);
        setError(null)
      })
      
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
console.log(toyP)
  return {
    toyP,
    error,
    loading,
  };
};

export default useToyproduct;