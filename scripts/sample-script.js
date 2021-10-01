const hre = require("hardhat");

async function main() {
  const Contract01 = await hre.ethers.getContractFactory("Contract01");
  const contract01 = await Contract01.deploy("Deploy Contract01");

  await contract01.deployed();

  console.log("Contract01 deployed to:", contract01.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
