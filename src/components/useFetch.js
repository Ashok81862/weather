import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=> {
        setTimeout(()=>{
            fetch(url).then((res) => {
                if(!res.ok){
                    throw Error('Could not fetch data for that resource !!')
                }
                return res.json()
            }).then( data => {
                setData(data)
                setIsPending(false)
                setError(null)
            }).catch((error) => {
                console.log(error)
            })
        },1000)
    },[url])

    return {data, isPending, error}
}

export default useFetch