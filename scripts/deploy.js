// const hre = require("hardhat");
const { ethers, run, network } = require("hardhat")

async function main() {
  const SimpleStorgeFactory = await ethers.getContractFactory("SimpleStorage")
  const simpleStorage = await SimpleStorgeFactory.deploy()
  await simpleStorage.deployed()
  console.log(`Deploying contract to address : ${simpleStorage.address}`)
  if (network.config.chainId === 11155111 && process.env.etherscan_api_key) {
    await simpleStorage.deployTransaction.wait(5)
    await verify(simpleStorage.address, [])
  }

  const currentNumber = await simpleStorage.retrieve()
  console.log(`Current number is : ${currentNumber}`)
  const transactionResponce = await simpleStorage.store(9)
  await transactionResponce.wait(1)
  const updatedNumber = await simpleStorage.retrieve()
  console.log(`Current number is : ${updatedNumber}`)

}
async function verify(contractAddress, args) {
  try {
    console.log("verifing .....")
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args
    })
  }
  catch (e) {
    console.log(e)
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
