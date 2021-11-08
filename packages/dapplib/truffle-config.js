require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million proof harvest drive fold tumble'; 
let testAccounts = [
"0xf22d4d89b862a3d83cf11aa844a0687ac4f6b1317a746f4f43d5b453bf2ea231",
"0xe8585835cf575a7519aed8d43b3762dfcefe452bbe183fe99ed4043c7743fdfb",
"0x60ba8554d2d9a7416915bcda0099774499eeb6a03b4beaca63998cf9909f95aa",
"0x398d4164f408e86727955618b0046ce884951b5a472e6fd35bff9bfc6dca0295",
"0xf531584a9fd73d4ef9ec7361877d559df87c73fd11cf243d0838f60c16b64486",
"0x62dd9c72b209c1429f3955aa2ac09ffd1338b1a921c2ed9e84a7c50ee4c9e507",
"0x96cd0406a557d058dfeafb3cc8b759d7ba828e01ec9a4291b6194d51dab009f5",
"0xcf4ceb1f26e431bdbf79ee87b116fdb2ca473eaaf5fb3d71040119667ac9515e",
"0x3f3bf28d4363cf68028cb8665216ea211933c96e8d647d0b5793236d0ba676f1",
"0x47c6eca0339522f61230bafcbe6215d458168d59e46a6a4ed3bc738c26514cb3"
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

