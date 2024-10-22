import React from 'react';
import BookList from '../components/User/BookList';
import '../styles.css'; // Ensure you import your styles if this file is in a different directory

const UserDashboard = () => {
  const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', category: 'Fiction', publication: 'Pub 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', category: 'Sci-Fi', publication: 'Pub 2' },
  ];

  return (
    <div className="container">
      <h1>User Dashboard</h1>
      <BookList books={books} />
    </div>
  );
};

export default UserDashboard;
