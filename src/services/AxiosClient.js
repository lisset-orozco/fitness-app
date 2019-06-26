import axios from 'axios'
import { useState, useEffect } from 'react';

import urlBase from '../config';

// *** GET
const useGetAll = () => (
  useGet(-1)
)

const useGet = (id) => {
  const url = id < 0 ? `${urlBase}/exercises` : `${urlBase}/exercises/${id}`

  const [Data, setData] = useState([]);
  const [hasError, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResource = async () => {
      await axios.get(url)
            .then( async(res) => {
              setData(await res.data);
              setLoading(false);
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
}

// *** POST
const post = async(url, body) => {
  return await axios.post(url, body)
    .then( (res) => {
      return { success: true }
    })
    .catch( error => {
      return {loading: false, hasError: true}
    });
};

// *** DELETE
const del = async(id) => {
      const url = `${urlBase}/exercises/${id}`

      return await axios.delete(url)
        .then( (res) => {
          console.log(res.msj)
          return { success: true }
        })
        .catch( error => {
          return {loading: false, hasError: true}
        });
};

// *** PUT
const put = async(id, body) => {
  const url = `${urlBase}/exercises/${id}`
    return await axios.put(url, body)
      .then( (res) => {
        return { success: true }
      })
      .catch( error => {
        return {loading: false, hasError: true}
      });
};

export default {
  get: useGet,
  getAll: useGetAll,
  post,
  put,
  delete: del,
}
