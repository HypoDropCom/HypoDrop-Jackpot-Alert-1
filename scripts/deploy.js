async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const HypoDropJackpotAlert1 = await ethers.getContractFactory(
    "HypoDropJackpotAlert1"
  );
  const myNFT = await HypoDropJackpotAlert1.deploy();
  console.log("Contract deployed to address:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
