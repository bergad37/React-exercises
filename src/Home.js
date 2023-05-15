import { useState,useEffect } from "react";
import './index.css';
import { BlogList } from "./BlogList";

export const Home = () => {
  const [blogs,setBlogs]=useState([
    {title:'My first react app',body:'Lorem Ipsum is simply dummy text of the printing',author:'Ben',id:1},
    {title:'My second react app',body:'Lorem Ipsum is simply dummy text of the printing',author:'Bertrand',id:2},
    {title:'My third react app',body:'Lorem Ipsum is simply dummy text of the printing',author:'Jean',id:3}
  ]);

  const [name,setName]=useState('mario');
  const handleDelete=(id)=>{
const newBlogs=blogs.filter(blog=>blog.id!==id);
setBlogs(newBlogs);
  }
  useEffect(()=>{
console.log(blogs);

  },[name]);//dependence array , the use effect is activated only when the sate of name changes but not the state of blogs 

  return (
    <div className='home'>
   <BlogList blogs={blogs} title='All blogs!' handleDelete={handleDelete}/>
   <button onClick={()=>setName('chris')}>Change name</button>
   <p>{name}</p>
    </div>
  )
}
