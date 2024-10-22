import React, { useState } from 'react';

const AdminBookList = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', rented: false },
    { id: 2, title: 'Book 2', rented: true },
  ]);

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h2>Manage Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <p>{book.title}</p>
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminBookList;
