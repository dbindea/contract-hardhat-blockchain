require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/* const infuraKey = "...";
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim(); */

module.exports = {
  solidity: "0.8.9",
  /* networks: {
    kovan: {
      url: `https://kovan.infura.io/v3/${infuraKey}`,
      accounts: { mnemonic: mnemonic },
    },
  }, */
};
