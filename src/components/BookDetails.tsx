import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BookDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch the details of the specific book from the API
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`/api/books/${bookId}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  if (!book) {
    return <p>Loading book details...</p>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Price: ${book.price}</p>
      <p>Description: {book.description}</p>
    </div>
  );
}

export default BookDetails;
