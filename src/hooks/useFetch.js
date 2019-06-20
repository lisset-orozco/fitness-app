import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [Data, setData] = useState([]);
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResource = async () => {
      await axios.get(url)
            .then( async(res) => {
              setData(await res.data);
              setLoading(false);
              //console.log(Data);
            })
            .catch( error => {
              console.log(error);
              setError(true);
              setLoading(false);
            });
    }  
    fetchResource();
  }, [url]);          

  return { Data, hasError, loading }
};

export { useFetch };
