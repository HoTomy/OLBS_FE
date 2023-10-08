import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from './common/http-common';
import { Link } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the list of books from the API
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${api.uri}/book`)
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>
                <h3>{book.title}</h3>
              </Link>
              <p>{book.author}</p>
              <p>Price: ${book.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;