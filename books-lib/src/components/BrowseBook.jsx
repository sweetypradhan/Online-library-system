import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookData } from '../utils/BookData'; 
import "./Home.css";
import { useSelector } from 'react-redux';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];

function BrowseBook() {

  const books = useSelector((state) => state.books);    // Get the list of books from the Redux store

  const allBooks = [...books, ...BookData];     // Combine books from the Redux store and the BookData static file

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

   // Filter books based on search query and selected category
  const filteredBooks = allBooks.filter(book => 
    (selectedCategory === 'All' || book.category === selectedCategory) &&
    (book.book_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     book.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className='browse-container'>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search book..." 
          value={searchQuery}
          onChange={handleSearchChange} 
        />
        
        <button id='btn'>Search</button>
      </div>

      <select 
          value={selectedCategory}
          onChange={handleCategoryChange} id='category'
        >
          <option value="All">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

      <div className="book-card">
        <ul className="popular-card">
          {/* Display list of filtered books */}
          {filteredBooks.map(book => (
            <li key={book.id} className="book-item">
              <img src={book.book_image} alt={book.book_name} style={{ width: '150px', height: '200px' }} />
              <h2 className="book-title">{book.book_name}</h2>
              <p className="book-author"><strong>Author:</strong> {book.author}</p>
              <p className="book-date"><strong>Published:</strong> {book.published_date}</p>
              <p className="book-rating"><strong>Rating:</strong> {book.rating}</p>
              <p className="book-desc">{book.description}</p>
              <Link to={`/books/${book.id}`} className="book-link">View Details</Link>    {/* link to show the details of the book */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BrowseBook;













