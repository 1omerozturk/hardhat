
const hre = require("hardhat");

async function main() {

  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
  const HelloWorld_ = await HelloWorld.deploy();

  await lock.deployed();

  console.log(
`Contract Address: ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
