async function main() {
  // if you changed the name of the contract, be sure to update this here!
  const PGNFTToken = await hre.ethers.getContractFactory("PGNFTToken");

  const nft = await PGNFTToken.deploy();

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);
 
  // mint one to yourself!
  const signer0 = await ethers.provider.getSigner(0);
  // update the IPFS CID to be your metadata CID
  await nft.safeMint(
    await signer0.getAddress(),
    "ipfs://QmZbRthLUbqd7zkjJaUunC2cJjuV2WhS91P4ucsE7ce9B6"
  );

  console.log("NFT Minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });