import { useState, useEffect } from 'react';
import axios from 'axios';


const useDataFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'c16fcad8aemsh420c5cf15bafb72p10753cjsn2aeff6bd2ce0',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query }
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {

            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);

        } catch (error) {
            setError(error);
            alert("there is an error");
        } finally {
            setIsLoading(false)
        }

    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetchData = () => {
        setIsLoading(true);
        fetchData();
    };


    return { data, isLoading, error, refetchData };

};

export default useDataFetch;