import { useState } from "react";
import './index.css';
import { BlogList } from "./BlogList";

export const Home = () => {
  const [blogs,setBlogs]=useState([
    {title:'My first react app',body:'Lorem Ipsum is simply dummy text of the printing',author:'Ben',id:1},
    {title:'My second react app',body:'Lorem Ipsum is simply dummy text of the printing',author:'Bertrand',id:2},
    {title:'My third react app',body:'Lorem Ipsum is simply dummy text of the printing',author:'Jean',id:3}
  ]);

  const handleDelete=(id)=>{
const newBlogs=blogs.filter(blog=>blog.id!==id);
setBlogs(newBlogs);
  }

  return (
    <div className='home'>
   <BlogList blogs={blogs} title='All blogs!' handleDelete={handleDelete}/>
  <BlogList blogs={blogs.filter((blog)=> blog.author==='Bertrand') } title='Bertrand blogs'  handleDelete={handleDelete} />
    </div>
  )
}
