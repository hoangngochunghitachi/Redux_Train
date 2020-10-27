import React from 'react';
import { Link } from 'react-router-dom';


function About(props) {
    return (
        <div>
            <div>
                <h1> About Page</h1>
                <Link to="/">Home Page </Link>
            </div>
        </div>
    );
}

export default About;