import { useEffect, useState } from 'react'

function fetchMongoDB() {

    const [ data, setData ] = useState([]);
    const [ loading, setLoading  ] = useState(false);
    const [ error, setError ] = useState(null);

    const dataRequest = JSON.stringify({
        "collection": "airQual",
        "database": "AIRMON_DB",
        "dataSource": "AirMon-VIC",
        "projection": {
            "_id": 1
        }
    });

    const API_URL = 'https://data.mongodb-api.com/app/airguard-txito/endpoint/data/v1/action/findOne';

    useEffect(() => {

        setLoading( true )

        const fetchMongoData = async () => {

            try {
                const res = await fetch(API_URL, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Request-Headers': '*',
                        'api-key': 'l6Nq9x9pGrZmjHa0lOyn0vrIohk3bQOvzNIK7vE2rKkaG8S94uSMwnVRjoKcEaoT',
                        'Accept': 'application/json',
                    },
                    body: dataRequest,
                });

                if ( !res.ok ) throw error ( 'MongoDB request failed' );
                const resJson = await res.json(); 
                console.log(res)
                console.log(resJson)

                setData( resJson );

            } catch ( err ) {
                
                setError( err.message );
                console.log( err )

            } finally {
                
                setLoading( false )
            };
        };
        fetchMongoData();
    },[]);

    return {
        data, loading, error
    }
    
};

export default fetchMongoDB;