import React from 'react';
import { Link } from 'react-router-dom';
import ChildComponent from './ChildComponent';

function Home(props) {

    const receiveData = function (data) {
        console.log('Data receive: ', data)
    }

    return (
        <div>
            <Link to="/about">About / </Link>
            <Link to="/exchange-money">Exchange Money / </Link>
            <Link to="/shop">Shop / </Link>
            <Link to="/login">Login / </Link>
            <Link to="/404">404 / </Link>
            <hr />
            <br />
            <h1> Home Page</h1>
            <ChildComponent onReceiveData={receiveData} />
        </div>
    );
}

export default Home;