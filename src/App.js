// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ListPage from './components/ListPage';
import TradePage from './components/TradePage';
import WalletPage from './components/WalletPage';

const App = () => {
    return (
        <Router>
            <div> <div>HEllo</div>
                <Navbar />
                <Routes>
                    <Route path="/" exact component={Home} />
                    <Route path="/list" component={ListPage} />
                    <Route path="/trade" component={TradePage} />
                    <Route path="/wallet" component={WalletPage} />
                </Routes>
            </div>
        </Router>
    );
};
   
export default App;
