// MintTokens.js

import React, { useState } from 'react';
import { mintTokens } from '../utils/web3'; // Import the function to mint tokens

const MintTokens = () => {
    const [amount, setAmount] = useState('');

    const handleMintTokens = async () => {
        if (amount) {
            await mintTokens(amount);
            setAmount(''); // Clear the input field after minting tokens
        } else {
            alert('Please enter the amount of tokens to mint');
        }
    };

    return (
        <div>
            <h2>Mint Tokens</h2>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={handleMintTokens}>Mint</button>
        </div>
    );
};

export default MintTokens;
