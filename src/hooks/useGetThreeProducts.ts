import axios from "axios";
import React, { useEffect } from "react";

export function useGetThreeProducts(url: string) {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  useEffect(() => {
    setLoading(true);
    axios.get(url)
      .then(res => {
        setProducts(res.data);
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [products, loading, error];
}