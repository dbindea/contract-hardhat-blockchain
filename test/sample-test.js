const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Contract01", function () {
  it("Should return the new text once it's changed", async function () {
    const Contract01 = await ethers.getContractFactory("Contract01");
    const contract01 = await Contract01.deploy("text1");
    await contract01.deployed();

    expect(await contract01.greet()).to.equal("text1");

    const setGreetingTx = await contract01.setGreeting("text2");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await contract01.greet()).to.equal("text2");
  });
});
