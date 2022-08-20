require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift recipe place hole hope civil army ghost'; 
let testAccounts = [
"0x03f4e9ac1c26410621d34eab3459415d264b3a5c0d5f70479b7dde3cc2944d4f",
"0x43b8bc7901abaa9f7e279113b1806ce6aedeb1c3d9a279c333a94b54e9a2fac7",
"0x545a2933b83fb9fd372b4c2976f1b86789396fce8a2919aea69ce5c1039355b8",
"0x29f08e157bf96c2cad5573be9a6e72fc2808b52aaf06089d3d816b4b84cbe9e1",
"0x26c92a4800f5ec8792fff7d07ad2c667ee36e533b50b17939e81317afa7cd150",
"0x064e84727c6e9479be5bc65358eec7b7c992d753d5f06c2dd1b023ffec22d8f0",
"0xa189a4cccee8160efc6418b4fb846b8d931e676d84d9f14b6fe940ae55793820",
"0x2ab64c7354304cfd336cc063b3e2b0398e314bd524a22dab9e105b00d6cf10f8",
"0x8914743a56621e37fe74c6da75e2466dc8a5025b338133f521821ce8d2d2b46b",
"0xfb34e89fbd228cf6d0f2e0f75c609d9ef41352f3ea5fd74d920567875540be90"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

