import { useRouteError } from "react-router-dom";
import "./Home.css";
import { Link } from 'react-router-dom';

function Error(){

    const err = useRouteError();
    console.log(err);
    
    return(
        <div className="error">

            <div className="error-link">
            <Link to="/" className="back-to-home">Back to Home</Link> 
            </div>
            
        </div>
    )
}

export default Error;