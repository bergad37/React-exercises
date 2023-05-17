import './index.css'

export const BlogList = ({blogs,title}) => {
//     const blogs=props.blogs; // Just in case we need to access the props 
//    const title=props.title;


   return (
    <div className='blog-list'>
    <h2 className='title'>{title}</h2>
     {blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id}>
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        </div>
          ))}</div>
    
  );
}
