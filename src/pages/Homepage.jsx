import React from "react";
import "./Homepage.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBlog } from "../store/blogSlice";
import toast from "react-hot-toast";

const HomePage = () => {
  const blogs = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
    toast.success("Blog deleted successfully");
  };

  return (
    <div className="container">
      <h1 className="heading">Blog List</h1>
      <Link to="/create" className="btn btn-primary">
        Create New Post
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="card">
            <h2 className="card-title">{blog.title}</h2>
            <p className="card-description">{blog.description}</p>
            <p className="card-category">Category: {blog.category}</p>
            <div className="card-actions">
              <Link to={`/blogs/${blog.id}`} className="link">
                Read More
              </Link>
              <button
                onClick={() => handleDelete(blog.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
