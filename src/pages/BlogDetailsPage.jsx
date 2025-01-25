import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteBlog } from "../store/blogSlice";
import toast from "react-hot-toast";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogs = useSelector((state) => state.blogs);
  const blog = blogs.find((b) => b.id === id);
  const dispatch = useDispatch();

  if (!blog) return <div>Blog not found</div>;

  const handleDelete = () => {
    dispatch(deleteBlog(id));
    toast.success("Blog deleted successfully");
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
      <p>{blog.description}</p>
      <p className="text-sm text-gray-500">Category: {blog.category}</p>
      <p className="text-sm text-gray-500">Tags: {blog.tags}</p>
      <button
        onClick={() => navigate("/")}
        className="bg-gray-500 text-white py-2 px-4 rounded mr-4"
      >
        Back to Home
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white py-2 px-4 rounded"
      >
        Delete Blog
      </button>
    </div>
  );
};

export default BlogDetailsPage;
