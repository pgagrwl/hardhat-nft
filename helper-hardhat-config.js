const { ethers } = require("hardhat")

const networkConfig = {
    5: {
        name: "goerli",
    },
    80001: {
        name: "mumbai",
    },
    31337: {
        name: "hardhat",
    },
}

const developmentChains = ["hardhat", "localhost"]

const frontEndContractsFile = "../frontend-template/constants/contractAddress.json"
const frontEndAbiFile = "../frontend-template/constants/abi.json"

module.exports = {
    networkConfig,
    developmentChains,
    frontEndContractsFile,
    frontEndAbiFile,
}
