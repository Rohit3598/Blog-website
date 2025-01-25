import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    createBlog: (state, action) => {
      const newBlog = {
        id: Date.now().toString(),
        ...action.payload,
      };
      state.push(newBlog);
    },
    deleteBlog: (state, action) => {
      return state.filter((blog) => blog.id !== action.payload);
    },
  },
});

export const { createBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;
