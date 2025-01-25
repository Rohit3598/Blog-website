import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import CreateBlogPage from "./pages/CreateBlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import blogReducer from "./store/blogSlice";

const store = configureStore({
  reducer: {
    blogs: blogReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container mx-auto p-4">
          <Toaster />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateBlogPage />} />
            <Route path="/blogs/:id" element={<BlogDetailsPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
