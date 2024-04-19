// BuyTokens.js

import React, { useState } from 'react';
import { buyTokens } from '../utils/web3'; // Import the function to buy tokens

const BuyTokens = () => {
    const [amount, setAmount] = useState('');

    const handleBuyTokens = async () => {
        if (amount) {
            await buyTokens(amount);
            setAmount(''); // Clear the input field after buying tokens
        } else {
            alert('Please enter the amount of tokens to buy');
        }
    };

    return (
        <div>
            <h2>Buy Tokens</h2>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={handleBuyTokens}>Buy</button>
        </div>
    );
};

export default BuyTokens;
