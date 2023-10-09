import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Online Book Store</h1>
      <p>Explore our wide range of books and find your next great read!</p>

      <div>
        <Link to="/BookList">
          <button>Book List</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/EnquiryForm">
          <button>Enquiry Form</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;