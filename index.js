const fs = require("fs");
const ethers = require("ethers");

const seedPhrases = [];
const targetPattern = /(\w)\1{3,}$/;
let numberCreated = 0;
let numberFounded = 0;

while (true) {
  numberCreated += 1;
  const wallet = ethers.Wallet.createRandom();
  const mnemonic = wallet.mnemonic.phrase;
  const address = wallet.address;
  const privateKey = wallet.privateKey.slice(2);
  if (targetPattern.test(address.slice(-5))) {
    console.log(`Wallet found: ${address}`);
    const walletInfo = {
      mnemonic: mnemonic,
      address: address,
      privateKey: privateKey,
    };

    seedPhrases.push(walletInfo);
    numberFounded += 1

    fs.writeFileSync("wallets.json", JSON.stringify(seedPhrases, null, 2));
  }
  console.log(`Number of times created / number of times found:: ${numberCreated}/${numberFounded}`);
}
