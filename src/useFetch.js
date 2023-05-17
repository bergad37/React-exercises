import { useState,useEffect } from "react";


const useFetch=(url)=>{
    const [data,setData]=useState(null);
  const [isPending,setIsPending]=useState(true);
const [error,setError]=useState(null);

    useEffect(()=>{
        setTimeout(()=>{
          fetch(url)
          .then(res=>{
            if(!res.ok){
              throw Error('Could not fetch data from the server');
            }
            return res.json();
          })
          .then(data=>{
           // console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch((err)=>{
        setError(err.message);
        setIsPending(false);
          })
        },2000);
        
          },[url]);//dependence array , the use effect is activated only when the sate of name changes but not the state of blogs 
          return{data,isPending,error};
}


export default useFetch;