// window.addEventListener("load", () => {
var checklist = {};
checklist.isMetaMaskInstalled = false;
checklist.isLoggedIn = false;
checklist.isSupportedNetwork = false;
checklist.networkId = 0;

/* Code For checking width compatibility */
var account;
if (typeof web3 !== "undefined") {
    web3 = new Web3(web3.currentProvider);
    if (web3.currentProvider) {
        checklist.isMetaMaskInstalled = true;
        web3 = new Web3(web3.currentProvider);
        account = web3.eth.accounts[0];

        console.log(account);

        if (account.length != 0) {
          checklist.isLoggedIn = true; 
          console.log('Working Great');
        }
        
        var netId = web3.version.network;
        checklist.networkId = netId;
        if (netId === "1" || netId === "42" || netId === "3") {
          checklist.isSupportedNetwork = true;
        }
    } else {
        console.log('not conected via any client');
    }
}

// declared variables
var RopstenCP = "0x6358C4F33bca651A2B60A8209778f57725305db1";
var KovanCP = "0xCDFcaf564044FEae2e2F81eD875AD85968e41CD8";

var mainKyberAdd = '0x818E6FECD516Ecc3849DAf6845e3EC868087B755';
var mainKyberContract = web3.eth.contract(kyberMainABI).at(mainKyberAdd);
var DAIRopsten = "0xaD6D458402F60fD3Bd25163575031ACDce07538D";

var MakerDAOContract = web3.eth.contract(MakerDAI).at("0xa71937147b55Deb8a530C7229C442Fd3F31b7db2");