import React, { useEffect, useState } from 'react';

function useFetchApi(API_URL: string) {

  const [ data, setData ] = useState([]);
  const [ loading, setLoading  ] = useState(false);
  const [ error, setError ] = useState(null);

  
  useEffect(() => {

    setLoading(true)

    const fetchData = async () => {
      try{
        const response = await fetch(API_URL, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) throw new error('Did not recieve Database update as expected');
        const resJson = await response.json();
       // console.log(resJson) // Used for debugging
        setData(resJson);
      }
      catch (err) {
        setError(err.message);
      }
      finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return {
    data, loading, error
  }
  
};

export default useFetchApi;
