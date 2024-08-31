import "./Home.css";
import { Link } from "react-router-dom";
import { BookData } from '../utils/BookData';

function Home() {
    const popularBooks = BookData.filter(book => book.rating >= 4.4);

    return (
        <>
            <div className="homepage">
                <h1 className="heading">Keep the story going...</h1>
                <img src="https://clipart-library.com/images/6cp5X4yEi.png" className="book-img" alt="Books" />
                <p className="para">Don't let the story end just yet. The more that you read, the more things you'll know.</p>
                
                <ul id="home-category">
                    <Link to="/Fiction" style={{ textDecoration: "none", color: "white" }}>
                        <li>Fiction</li>
                    </Link>
                    <li>|</li>
                    <Link to="/NonFiction" style={{ textDecoration: "none", color: "white" }}>
                        <li>Non-Fiction</li>
                    </Link>
                    <li>|</li>
                    <Link to="/SciFi" style={{ textDecoration: "none", color: "white" }}>
                        <li>Sci-Fi</li>
                    </Link>
                </ul>
            </div>

            <div className="popularBook">
                <h1>Popular Books</h1>
                <ul className="popular-card">
                    {popularBooks.map(book => (
                        <li key={book.id} className="book-item">
                            <img src={book.book_image} alt={book.book_name} style={{ width: '150px', height: '200px' }} />
                            <h2 className="book-title">{book.book_name}</h2>
                            <p className="book-author"><strong>Author:</strong> {book.author}</p>
                            <p className="book-date"><strong>Published:</strong> {book.published_date}</p>
                            <p className="book-rating"><strong>Rating:</strong> {book.rating}</p>
                            <p className="book-desc">{book.description}</p>
                            <Link to={`/books/${book.id}`} className="book-link">View Details</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Home;
