const { ethers, upgrades } = require('hardhat');

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const authorizedSigner = "0x89145000ADBeCe9D1FFB26F645dcb0883bc5c3d9";
    const authContractFactory = await hre.ethers.getContractFactory("SelfkeyIdAuthorization");
    const contract = await authContractFactory.deploy( authorizedSigner );

    console.log("Deployed authorization with contract address:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
