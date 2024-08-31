import React from 'react';
import { BookData } from '../utils/BookData';
import "./style.css"
import { Link } from "react-router-dom";

function NonFiction() {
    // Filter the books to include only Non-Fiction books
    const fictionBooks = BookData.filter(book => book.category === 'Non-Fiction');

    return (
        <div className='container'>
            <h1>Non-Fiction Books</h1>

            <p>Nonfiction is an account or representation of a subject which is presented as fact. This presentation may be accurate or not; that is, it can give either a true or a false account of the subject in question. However, it is generally assumed that the authors of such accounts believe them to be truthful at the time of their composition. Note that reporting the beliefs of others in a nonfiction format is not necessarily an endorsement of the ultimate veracity of those beliefs, it is simply saying that it is true that people believe that (for such topics as mythology, religion). Nonfiction can also be written about fiction, giving information about these other works.</p>
            
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
                <p>No NonFiction books available.</p>
            )}
            </div>
        </div>
    );
}

export default NonFiction;
