import {useEffect, useState} from "react";

export function useRequest(request: any) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    request()
      .then((res: any) => {
        setData(res.data)
      })
      .catch((e: any) => setError(e.message))
      .finally(() => {
        setLoading(false);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data, loading, error];
}