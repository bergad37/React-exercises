import { useState,useEffect } from "react";


const useFetch=(url)=>{
    const [data,setData]=useState(null);
  const [isPending,setIsPending]=useState(true);
const [error,setError]=useState(null);

    useEffect(()=>{
const abortCont=new AbortController();  //to stop the fetch method for not throwing the error that unmounted component is being updated

        setTimeout(()=>{
          fetch(url,{signal:abortCont.signal})
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
            if(err.name==='AbortError'){
                console.log('fetch aborted');
            }
            else{
                setError(err.message);
                setIsPending(false);
            }
          })
        },2000);
        return ()=>abortCont.abort;
        
          },[url]);//dependence array , the use effect is activated only when the sate of name changes but not the state of blogs 
          return{data,isPending,error};
}


export default useFetch;