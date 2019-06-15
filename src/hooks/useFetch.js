import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [Data, setData] = useState([]);
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResource = async () => {
      await fetch(url)
            .then( async(res) => {
              setData(await res.json());
              setLoading(false);
              console.log(res);
            })
            .catch( error => {
              setError(true);
              setLoading(false);
            });
    }  
    fetchResource();
  }, [url]);          

  return { Data, hasError, loading }
};

export default useFetch;
