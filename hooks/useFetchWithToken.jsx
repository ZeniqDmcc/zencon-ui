import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
function useFetchWithToken(url, options = {}) {
  const router = useRouter()
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token,setToken] = useState(null);

  useEffect(() => {
    const ethAddr = localStorage.getItem("eth_adr");
    setToken(ethAddr)
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "token": ethAddr,
    };
    const fetchOptions = { ...options, headers };

    fetch(url, fetchOptions)
      .then((response) => {
        if (response.status === 401) {
            return router.push("/")
        }
        return response.json();
      })
      .then((data) => {
        const { data: { participant } } = data;
        setData(participant);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setData(null);
        setLoading(false);
      });
  }, []);

  return { data, error, loading,token };
}

export default useFetchWithToken;
