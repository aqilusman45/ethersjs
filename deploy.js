const ethers = require("ethers");

async function main() {
  // ethers is a library that allows us to connect
  // to the actual blockchain using
  // RPC (Remote Procedure Call) allows access to a server node on the specified
  // network and allows you to communicate and interact with that blockchain.
  // http://127.0.0.1:7545 // Ganache RPC URL

  // init our provider
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "bc3acdcdd297683b5defdc91b33f10eeb458dc1ca3f31288aec47fd33e6d485a",
    provider
  );
}

main().then(() => {
  console.log("compiled successfully");
});
