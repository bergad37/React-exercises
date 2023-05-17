import { useState,useEffect } from "react";
import './index.css';
import { BlogList } from "./BlogList";
import useFetch from "./useFetch";

export const Home = () => {
  const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
  return (
    <div className='home'>
    {error && <div>{error}</div>}
    {isPending && <div>Loading.....</div>}
   {blogs && <BlogList blogs={blogs} title='All blogs!' /> }
    </div>
  )
}
