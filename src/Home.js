import { useState } from "react";
import './index.css';

export const Home = () => {
  const [blogs,setBlogs]=useState([
    {title:'My first react app',body:'Lorem Ipsum is simply dummy text of the printing',author:'Ben',id:1},
    {title:'My second react app',body:'Lorem Ipsum is simply dummy text of the printing',author:'Bertrand',id:2},
    {title:'My third react app',body:'Lorem Ipsum is simply dummy text of the printing',author:'Jean',id:3}
  ]);
  return (
    <div className='home'>
    {blogs.map((blog)=>(
<div className="blog-preview" key={blog.id}>
<h2>{blog.title}</h2>
<p>Written by {blog.author}</p>
</div>
  ))}
    </div>
  )
}
