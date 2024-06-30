# MetaMask Wallet Generator

## Description

This project allows users to create multiple MetaMask wallets in a batch and identifies wallets whose last X characters match a specified pattern. The purpose is to generate aesthetically pleasing wallet addresses. The generated wallets are saved in a `wallets.json` file. This process is entirely safe and does not store any user data.

## Features

- Batch creation of MetaMask wallets
- Identifies wallets with specific patterns in the address
- Secure and private key generation
- No user data storage
- Efficient: Can generate approximately 100,000 wallets in 5 minutes

## Requirements

- Node.js
- Web3.js library

## Usage

1. Install the necessary dependencies:

   ```bash
   npm install
3. Change the number in the targetPattern variable of the index.js file to get the last X numbers of the wallet

2. Run the script to generate wallets and find matches:

   ```bash
   node index.js
   


