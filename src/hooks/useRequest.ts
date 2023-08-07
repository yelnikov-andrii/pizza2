import {useEffect, useState} from 'react';

export function useRequest(request: any) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<any>();
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    request()
      .then((res: any) => {
        if (res.data.hasOwnProperty('totalCount')) {
          setTotalCount(res.data.totalCount);
          setCurrentPage(res.data.page);
          if (res.data.page > 1) {
            setData((prev: any) => prev ? [...prev, ...res.data.data] : res.data.data);
          } else {
            setData(res.data.data);
          }
        } else {
          setData(res.data);
        }
      })
      .catch((e: any) => {
        setError(e.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [request]);
  return [data, loading, error, totalCount, currentPage];
}