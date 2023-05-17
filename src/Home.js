import { useState,useEffect } from "react";
import './index.css';
import { BlogList } from "./BlogList";

export const Home = () => {
  const [blogs,setBlogs]=useState(null);
  const [name,setName]=useState('mario');
  const [isPending,setIsPending]=useState(true);
const [error,setError]=useState(null);

  useEffect(()=>{
setTimeout(()=>{
  fetch('http://localhost:8000/blogs')
  .then(res=>{
    if(!res.ok){
      throw Error('Could not fetch data from the server');
    }
    return res.json();
  })
  .then(data=>{
   // console.log(data);
    setBlogs(data);
    setIsPending(false);
    setError(null);
  })
  .catch((err)=>{
setError(err.message);
setIsPending(false);
  })
},2000);

  },[]);//dependence array , the use effect is activated only when the sate of name changes but not the state of blogs 

  return (
    <div className='home'>
    {error && <div>{error}</div>}
    {isPending && <div>Loading.....</div>}
   {blogs && <BlogList blogs={blogs} title='All blogs!' /> }
    </div>
  )
}
