import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./Home.css";


function Footer() {
    return (
        <div className="footerContainer">
        <footer className="footer">
            <div className="footer-content">
                
                <div className="footer-section social">
                    <h3>CONNECT</h3>
                     <div className="social-icons">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a href="mailto:support@bookstore.com" className="social-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        </div>
                </div>
                <div className="footer-section contact" >
                    <h3>Contact Us</h3>
                    <p>Email: GoodReads@gmail.com</p>
                    <p>Phone: +91 357 557 454</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Goodreads, Inc.</p>
            </div>
        </footer>
        </div>
    );
}

export default Footer;
