// SellTokens.js

import React, { useState } from 'react';
import { sellTokens } from '../utils/web3'; // Import the function to sell tokens

const SellTokens = () => {
    const [amount, setAmount] = useState('');

    const handleSellTokens = async () => {
        if (amount) {
            await sellTokens(amount);
            setAmount(''); // Clear the input field after selling tokens
        } else {
            alert('Please enter the amount of tokens to sell');
        }
    };

    return (
        <div>
            <h2>Sell Tokens</h2>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={handleSellTokens}>Sell</button>
        </div>
    );
};

export default SellTokens;
