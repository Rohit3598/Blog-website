# Blog Management Application

## Overview

This Blog Management Application is a responsive web app built with modern frontend technologies. It allows users to create, view, and manage blog posts efficiently.

### Key Features

- **Home Page**: Displays a list of blogs with options to read more or delete a blog.
- **Create Blog Page**: A form to create new blog posts with input validation.
- **Blog Details Page**: Displays full details of a selected blog.
- **State Management**: Redux is used for managing blog states, ensuring data consistency.
- **Toast Notifications**: Provides feedback for actions like creating or deleting blogs.
- **Reusable Components**: Components like `BlogCard` and form inputs for easy extensibility.

---

## Technologies Used

- **ReactJS**: Component-based UI development.
- **Next.js**: Server-side rendering and routing.
- **Redux**: State management.
- **Tailwind CSS**: Styling for responsive and clean UI.
- **React Toastify**: Toast notifications for user feedback.
- **React Icons**: Icons for enhanced UI.

---

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone the repository:

   git clone https://github.com/Rohit3598/Blog-website.git

` 2. Install dependencies:

npm install

3. Start the development server:

   npm run dev

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Home Page

- Displays all blogs from the Redux store.
- Uses `BlogCard` for each blog.
- "Create New Post" button to navigate to the create page.

### Create Blog Page

- Form includes fields for:
  - Title (min 5 characters)
  - Description (min 10 characters)
  - Category (required dropdown)
  - Tags (optional, unique)
  - Cover Image (optional file input)
  - Published Status (required radio buttons)
  - Published Date (required if published)
- Inline validation with error messages.
- Toast messages for successful creation or errors.

### Blog Details Page

- Displays complete blog details.
- "Back to Home" button for navigation.
- "Delete Blog" button with confirmation dialog and toast feedback.

## Future Enhancements

- Implement user authentication.
- Add search and filter functionality for blogs.
- Allow users to edit blogs.
- Add support for draft saving.

## Acknowledgments

- [ReactJS](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux](https://redux.js.org/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
