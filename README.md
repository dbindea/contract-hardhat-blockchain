# Hardhat Contract

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

## Start local

Run `npx hardhat node` for local and compile with `npx hardhat compile`. Publish contract in localhost red `npx hardhat run --network localhost scripts/sample-script.js` and interact with console on `npx hardhat console --network localhost`.

```
npx hardhat node

npx hardhat compile

npx hardhat run --network localhost scripts/sample-script.js

npx hardhat console --network localhost
```

## Start testnet

```
npx hardhat node

npx hardhat compile

npx hardhat run --network kovan scripts/sample-script.js

npx hardhat console --network kovan
```

## Some commands...

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

## Console commands

```shell
const Contract01 = await ethers.getContractFactory("Contract01")
const contract01 = await Contract01.attach("0x5FbDB2315678....")
await contract01.text()
await contract01.setText("Another text...")
await contract01.text()
```

## More info

https://dev.to/turupawn/hardhat-hola-mundo-en-un-blockchain-de-prueba-40c1