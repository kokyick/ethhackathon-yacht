var YachtSharesToken = artifacts.require("./YachtSharesToken.sol");
var YachtTimeToken = artifacts.require("./YachtTimeToken.sol");

module.exports = function(deployer) {
  deployer.deploy(YachtSharesToken);
  deployer.deploy(YachtTimeToken);
}
