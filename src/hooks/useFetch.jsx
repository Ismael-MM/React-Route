import { useCallback, useEffect, useState } from "react";

 const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    console.log("useFetch");

    const fetchData =useCallback( async() =>{
        setLoading(true);
        try{
            const res = await fetch(url);
            if(!res.ok) throw new Error('Could not fetch data')
            const data = await res.json();
            setData(data)
        }catch{
            console.log(error);
            setData([]);
            setError(error.message);
        }finally{
            setLoading(false);
        }
    },[]);

    useEffect(() => {
        console.log('useEffect');
        fetchData();
    },[])

    return {data,loading,error}
}
export default useFetch;