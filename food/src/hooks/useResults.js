import { useState, useEffect } from 'react'
import yelp from '../api/yelp';

export default () => {
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term:searchTerm, // because the param is call term as well as our variable we can just put "term"
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses)
        } catch (error) {
            setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, [])

    return [searchApi, results, errorMessage]
};