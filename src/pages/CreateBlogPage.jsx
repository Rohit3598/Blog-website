import React, { useState } from "react";
import "./CreateBlogPage.css";
import { useDispatch } from "react-redux";
import { createBlog } from "../store/blogSlice";
import toast from "react-hot-toast";

const CreateBlogPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
    coverImage: null,
    status: "Draft",
    publishedDate: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || formData.title.length < 5) {
      toast.error("Title is required and must be at least 5 characters");
      return;
    }
    if (!formData.description || formData.description.length < 10) {
      toast.error("Description is required and must be at least 10 characters");
      return;
    }
    if (!formData.category) {
      toast.error("Category is required");
      return;
    }
    if (formData.status === "Published" && !formData.publishedDate) {
      toast.error("Published date is required for published blogs");
      return;
    }

    dispatch(createBlog(formData));
    toast.success("Blog created successfully");
  };

  return (
    <div className="create-blog-container">
      <h1 className="title">Create Blog</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="input"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="textarea"
        ></textarea>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="select"
        >
          <option value="">Select Category</option>
          <option value="Tech">Tech</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Health">Health</option>
        </select>
        <input
          type="file"
          name="coverImage"
          onChange={handleChange}
          className="input file-input"
        />
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="status"
              value="Draft"
              checked={formData.status === "Draft"}
              onChange={handleChange}
            />
            Draft
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="status"
              value="Published"
              checked={formData.status === "Published"}
              onChange={handleChange}
            />
            Published
          </label>
        </div>
        {formData.status === "Published" && (
          <input
            type="date"
            name="publishedDate"
            value={formData.publishedDate}
            onChange={handleChange}
            className="input"
          />
        )}
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
