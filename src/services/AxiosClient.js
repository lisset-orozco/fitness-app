import axios from 'axios';
import { useState, useEffect } from 'react';

import { url_api } from  '../config';

const BASE_URL = `${url_api}/exercises`

// *** GET
const useGetAll = () => (
  useGet(-1)
)

const useGet = (id) => {
  const url = id < 0 ? BASE_URL : `${BASE_URL}/${id}`

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
              setError(true);
              setLoading(false);
            });
    }  
    fetchResource();
  }, [url]);          

  return { Data, hasError, loading }
}

// *** POST
const post = async(body) => {
  const url = BASE_URL
  return await axios.post(url, body)
    .then( (res) => {
      return { success: true , form: {...res.data.exercise} }
    })
    .catch( error => {
      return {loading: false, hasError: true}
    });
};

// *** DELETE
const del = async(id) => {
  const url = `${BASE_URL}/${id}`

  return await axios.delete(url)
    .then( (res) => {
      return { success: true }
    })
    .catch( error => {
      return {loading: false, hasError: true}
    });
};

// *** PUT
const put = async(id, body) => {
  const url = `${BASE_URL}/${id}`

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
