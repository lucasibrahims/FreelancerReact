const FreelancePlatform = artifacts.require("FreelancePlatform");

module.exports = async function (deployer, network,accounts) {
  await deployer.deploy(FreelancePlatform);
};
