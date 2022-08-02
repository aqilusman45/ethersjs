const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  // ethers is a library that allows us to connect
  // to the actual blockchain using
  // RPC (Remote Procedure Call) allows access to a server node on the specified
  // network and allows you to communicate and interact with that blockchain.
  // http://127.0.0.1:7545 // Ganache RPC URL

  // init our provider
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:7545"
  );
  const wallet = new ethers.Wallet(
    "bc3acdcdd297683b5defdc91b33f10eeb458dc1ca3f31288aec47fd33e6d485a",
    provider
  );

  // we need to deploy our contract on the local blockchain
  // to deploy a contract we need
  // - ABI
  // - Byte Code File
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const byteCode = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );

  // once we have the ABI and the Binary file
  // we need to create a Contract Factory using ethers
  // this will allow us deploy contracts
  const contractFactory = new ethers.ContractFactory(abi, byteCode, wallet);
  console.log("Deploying please wait...");
  const contract = await contractFactory.deploy({
    // we can provide options like
    // gas limit etc
  });
  console.log(contract);
}

main().then(() => {
  console.log("compiled successfully");
});
