// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" href="./home.js">Home</Link>
                </li>
                <li>
                    <Link to="/list" href="./ListPage.js">List</Link>
                </li>
                <li>
                    <Link to="/trade">Trade</Link>
                </li>
                <li>
                    <Link to="/wallet">Wallet</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
