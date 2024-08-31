import React from 'react';
import { BookData } from '../utils/BookData';
import "./style.css"
import { Link } from "react-router-dom";

function NonFiction() {
    // Filter the books to include only Sci-fi books
    const fictionBooks = BookData.filter(book => book.category === 'Sci-Fi');

    return (
        <div className='container'>
            <h1>Sci-Fi Books</h1>

            <p>Science fiction (abbreviated SF or sci-fi with varying punctuation and capitalization) is a broad genre of fiction that often involves speculations based on current or future science or technology. Science fiction is found in books, art, television, films, games, theatre, and other media. In organizational or marketing contexts, science fiction can be synonymous with the broader definition of speculative fiction, encompassing creative works incorporating imaginative elements not found in contemporary reality; this includes fantasy, horror and related genres.</p>
            
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
                <p>No SciFi books available.</p>
            )}
            </div>
        </div>
    );
}

export default NonFiction;
