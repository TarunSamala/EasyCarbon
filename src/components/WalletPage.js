// WalletPage.js

import React from 'react';
import Wallet from './Wallet';

const WalletPage = () => {
    return (
        <div>
            <h2>Wallet Page</h2>
            <Wallet />
            {/* Display the current tokens in the user's wallet */}
        </div>
    );
};

export default WalletPage;
