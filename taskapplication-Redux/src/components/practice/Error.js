import React from 'react';
import { Link } from 'react-router-dom';

function Error(props) {
    return (
        <div>
            <h1> 404 - Error Page</h1>
            <Link to="/">Home Page </Link>
        </div>
    );
}

export default Error;