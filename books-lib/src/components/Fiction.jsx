import React from 'react';
import { BookData } from '../utils/BookData';
import "./style.css"
import { Link } from "react-router-dom";

function Fiction() {
    // Filter the books to include only Fiction books
    const fictionBooks = BookData.filter(book => book.category === 'Fiction');

    return (
        <div className='container'>
            <h1>Fiction Books</h1>

            <p>Fiction is the telling of stories which are not real. More specifically, fiction is an imaginative form of narrative, one of the four basic rhetorical modes. Although the word fiction is derived from the Latin fingo, fingere, finxi, fictum, "to form, create", works of fiction need not be entirely imaginary and may include real people, places, and events. Fiction may be either written or oral. Although not all fiction is necessarily artistic, fiction is largely perceived as a form of art or entertainment. The ability to create fiction and other artistic works is considered to be a fundamental aspect of human culture, one of the defining characteristics of humanity.</p>
            
            <div className='card'>
            {fictionBooks.length > 0 ? (
                fictionBooks.map(book => (
                    <div className="book-list" key={book.id}>
                        <img src={book.book_image} alt={book.book_name} style={{ width: '150px', height: '200px' }} />
                        <h2 className='book-title'>{book.book_name}</h2>
                        <h3 className="book-author">by {book.author}</h3>
                        <h3 className="book-author">{book.rating}</h3>
                        <p className="book-date"><strong>Published:</strong> {book.published_date}</p>
                        <p className="book-desc">{book.description}</p>
                        <Link to={`/books/${book.id}`} className="book-link">View Details</Link>   {/* link to show the details of the book */}
                    </div>
                ))
            ) : (
                <p>No Fiction books available.</p>
            )}
            </div>
        </div>
    );
}

export default Fiction;
