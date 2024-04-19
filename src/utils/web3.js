// web3.js

import Web3 from 'web3';
import contractABI from '../contractABI.json'; 

// Initialize Web3
const initWeb3 = async () => {
    if (window.ethereum) {
        // Use MetaMask's provider
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable(); // Request account access
        return window.web3;
    } else {
        console.error('No Ethereum provider detected');
        return null;
    }
};

// Get contract instance
const getContractInstance = async () => {
    const web3 = await initWeb3();
    if (web3) {
        const contractInstance = new web3.eth.Contract(contractABI.abi, 'xdceae62968dd4b1025b397465bdcd565e8c27e94d3'); 
        return contractInstance;
    } else {
        return null;
    }
};

// Mint tokens
const mintTokens = async (amount) => {
    const contractInstance = await getContractInstance();
    if (contractInstance) {
        try {
            await contractInstance.methods.mint(amount).send({ from: window.web3.eth.defaultAccount });
            console.log('Tokens minted successfully');
        } catch (error) {
            console.error('Error minting tokens:', error);
        }
    }
};

// Buy tokens
const buyTokens = async (amount) => {
    const contractInstance = await getContractInstance();
    if (contractInstance) {
        try {
            await contractInstance.methods.buyTokens(amount).send({ from: window.web3.eth.defaultAccount });
            console.log('Tokens bought successfully');
        } catch (error) {
            console.error('Error buying tokens:', error);
        }
    }
};

// Sell tokens
const sellTokens = async (amount) => {
    const contractInstance = await getContractInstance();
    if (contractInstance) {
        try {
            await contractInstance.methods.sellTokens(amount).send({ from: window.web3.eth.defaultAccount });
            console.log('Tokens sold successfully');
        } catch (error) {
            console.error('Error selling tokens:', error);
        }
    }
};

export { initWeb3, mintTokens, buyTokens, sellTokens, getContractInstance };
