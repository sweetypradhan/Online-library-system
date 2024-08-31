import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../utils/bookSlice';
import { useNavigate } from 'react-router-dom';
import './AddBook.css';

function AddBook() {
  const [bookDetails, setBookDetails] = useState({
    book_name: '',
    author: '',
    published_date: '',
    category: '',
    book_image: '',
    description: '',
    rating: '',
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!bookDetails.book_name) newErrors.book_name = 'Book name is required';
    if (!bookDetails.author) newErrors.author = 'Author is required';
    if (!bookDetails.published_date) newErrors.published_date = 'Published date is required';
    if (!bookDetails.category) newErrors.category = 'Category is required';
    if (!bookDetails.book_image) newErrors.book_image = 'Book image URL is required';
    if (!bookDetails.description) newErrors.description = 'Description is required';
    if (!bookDetails.rating) newErrors.rating = 'Rating is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {    //after submission it will navigate to browseBook.jsx
    e.preventDefault();
    if (validate()) {
      dispatch(addBook(bookDetails));
      navigate('/BrowseBook');
    }
  };

  return (
    <div className='adddd'>
      <div className="add-book-container">
        <h1>Add a New Book</h1>
        <form onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className="form-group">
            <label htmlFor="book_name">Book Name:</label>
            <input
              type="text"
              id="book_name"
              name="book_name"
              value={bookDetails.book_name}
              onChange={handleChange}
            />
            {errors.book_name && <span className="error">{errors.book_name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={bookDetails.author}
              onChange={handleChange}
            />
            {errors.author && <span className="error">{errors.author}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="published_date">Published Date:</label>
            <input
              type="date"
              id="published_date"
              name="published_date"
              value={bookDetails.published_date}
              onChange={handleChange}
            />
            {errors.published_date && <span className="error">{errors.published_date}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="add-category"
              name="category"
              value={bookDetails.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
            {errors.category && <span className="error">{errors.category}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="book_image">Book Image URL:</label>
            <input
              type="text"
              id="book_image"
              name="book_image"
              value={bookDetails.book_image}
              onChange={handleChange}
            />
            {errors.book_image && <span className="error">{errors.book_image}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={bookDetails.description}
              onChange={handleChange}
            />
            {errors.description && <span className="error">{errors.description}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={bookDetails.rating}
              onChange={handleChange}
            />
            {errors.rating && <span className="error">{errors.rating}</span>}
          </div>
          <button id='add-btn' type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
