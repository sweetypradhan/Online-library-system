import { useParams } from 'react-router-dom';
import { BookData } from '../utils/BookData';
import './BookDetails.css'; 
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetails() {
    const { id } = useParams(); // Get the book ID from the URL
    const books = useSelector((state) => state.books)
    const book = BookData.find(book => book.id === id); // Find the book with the matching ID

    if (!book) {
        return <div>Book not found</div>; // Handle the case where the book is not found
    }

    return (
        <div className="book-details">
            <img src={book.book_image} alt={book.book_name} className="book-detail-image" />
            <h1 className="book-detail-title">{book.book_name}</h1>
            <p className="book-detail-author"><strong>Author:</strong> {book.author}</p>
            <p className="book-detail-date"><strong>Published:</strong> {book.published_date}</p>
            <p className="book-detail-rating"><strong>Rating:</strong> {book.rating}</p>
            <p className="book-detail-desc">{book.description}</p>
            <Link to="/BrowseBook" className="back-to-browse">Back to Browse</Link> {/* Add back to browse link */}
        </div>
    );
}

export default BookDetails;





