// Wallet.js

import React, { useState, useEffect } from 'react';
import { getContractInstance } from '../utils/web3'; // Import the function to get contract instance

const Wallet = () => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            const contractInstance = await getContractInstance();
            if (contractInstance) {
                const userAddress = window.web3.eth.defaultAccount;
                const balance = await contractInstance.methods.balanceOf(userAddress).call();
                setBalance(balance);
            }
        };

        fetchBalance();
    }, []);

    return (
        <div>
            <h3>Wallet Balance</h3>
            <p>Carbon Credit Tokens: {balance}</p>
        </div>
    );
};

export default Wallet;
