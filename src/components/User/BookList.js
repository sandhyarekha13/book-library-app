import React, { useState } from 'react';

const BookList = ({ books, onRent, onLike }) => {
  const [filter, setFilter] = useState('');
  
  const filteredBooks = books.filter(book => 
    book.category.includes(filter) || book.author.includes(filter) || book.publication.includes(filter)
  );

  return (
    <div>
      <input 
        type="text" 
        className="filter-input"
        placeholder="Filter by category, author, or publication" 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
      />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id} className="book-item">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <p>Publication: {book.publication}</p>
            <button onClick={() => onRent && onRent(book.id)}>Rent</button>
            <button onClick={() => onLike && onLike(book.id)}>Like</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
