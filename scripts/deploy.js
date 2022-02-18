const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
    console.log("deploying with ", deployer.address);
    console.log("Account Balance: ", accountBalance);

    const waveContractFactory = await hre.ethers.getContractFactory(
        "WavePortal"
    );
    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther("1"),
    });
    await waveContract.deployed();

    console.log("WavePortal address: ", waveContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();

// deployed address
// 0x0252662B33DAcd634fB2a339E81A4BD63a6a7479
