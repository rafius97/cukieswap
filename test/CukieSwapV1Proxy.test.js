const FeeHolder = artifacts.require("FeeHolder");
const { assert, upgrades, ethers } = require("hardhat");

const ACCOUNT = "0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e";

contract("CukieSwapV1 (Proxy)", () => {
  let CukieSwapV1, feeholder, instance;

  beforeEach(async () => {
    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [ACCOUNT],
    });
    feeholder = await FeeHolder.new({ from: ACCOUNT });

    CukieSwapV1 = await ethers.getContractFactory("CukieSwapV1");
    instance = await upgrades.deployProxy(CukieSwapV1, [feeholder.address]);
  });

  it("should retrieves a previously initialised recipient", async () => {
    assert.equal(feeholder.address, await instance.recipient());
  }).timeout(50000);
});