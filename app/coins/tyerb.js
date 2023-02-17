var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });
var MasternodeBase = require("./masternodeBase.js");

var Yerbas = new MasternodeBase("Yerbas Testnet", "Tyerb", "yerbas testnet", ["trap", "traposhi"], "smartnode");
Yerbas.addProperties({
	logoUrl:"/img/logo/yerb.svg",
	siteTitle:"Yerbas Test Explorer",
	siteDescriptionHtml:"<b>yerb Explorer</b> is <a href='https://github.com/The-Yerbas-Endeavor/rpc-explorer). If you run your own [Yerbas Full Node](https://github.com/Yerbas/Yerbas/releases), **yerb Explorer** can easily run alongside it, communicating via RPC calls. See the project [ReadMe](https://github.com/Yerbas/yerb-rpc-explorer) for a list of features and instructions for running.",
	nodeTitle:"Yerbas Full Node",
	nodeUrl:"https://github.com/The-Yerbas-Endeavor/yerbas/releases",
	demoSiteUrl: "https://btc.chaintools.io",
	masternodeName: "Smartnode",
	isFixedCollateral : false,
	miningPoolsConfigUrls:[
		"https://raw.githubusercontent.com/yerbcom/Blockchain-Known-Pools/master/pools.json",
		"https://raw.githubusercontent.com/blockchain/Blockchain-Known-Pools/master/pools.json"
	],
	targetBlockTimeSeconds: 60,
	currencyUnitsByName:{
		"TYERB": Yerbas.properties.currencyUnits[0],
		"mTYERB": Yerbas.properties.currencyUnits[1],
		"tYERB": Yerbas.properties.currencyUnits[2],
		"tweeds": Yerbas.properties.currencyUnits[3]
	},
	//baseCurrencyUnit: currencyUnits[3],
	//defaultCurrencyUnit:currencyUnits[0],
	//feeSatoshiPerByteBucketMaxima: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 50, 75, 100, 150],
	genesisBlockHash: "000000f049bef9fec0179131874c54c76c0ff59f695db30a4f0da52072c99492",
	genesisCoinbaseTransactionId: "f0cc5f92b11a6655a4939fc239e8bf960cd0453b87b5a0820ab36904279341a5",
	genesisCoinbaseTransaction: {
		"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0804ffff001d02fd04ffffffff0100f2052a01000000434104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac00000000",
		"txid": "f0cc5f92b11a6655a4939fc239e8bf960cd0453b87b5a0820ab36904279341a5",
		"hash": "f0cc5f92b11a6655a4939fc239e8bf960cd0453b87b5a0820ab36904279341a5",
		"size": 204,
		"vsize": 204,
		"version": 1,
		"confirmations":775000,
		"vin": [
			{
				"coinbase": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
				"sequence": 4294967295
			}
		],
		"vout": [
			{
				"value": 5000,
				"n": 0,
				"scriptPubKey": {
					"asm": "04f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446a OP_CHECKSIG",
					"hex": "4104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac",
					"reqSigs": 1,
					"type": "pubkey",
					"addresses": [
						"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
					]
				}
			}
		],
		"blockhash": "000000f049bef9fec0179131874c54c76c0ff59f695db30a4f0da52072c99492",
		"time": 1521661111,
		"blocktime": 1521661111
	},
	genesisCoinbaseOutputAddressScripthash:"8b01df4e368ea28f8dc0423bcf7a4923e3a12d307c875e47a0cfbf90b5c39161",
	historicalData: [
		{
			type: "blockheight",
			date: "2018-03-21",
			blockHeight: 0,
			blockHash: "000000f049bef9fec0179131874c54c76c0ff59f695db30a4f0da52072c99492",
			summary: "The Yerbas Genesis Block.",
			alertBodyHtml: "This is the first block in the Yerbas blockchain, known as the 'Genesis Block'. This block was mined by Yerbas's creator Luke. You can read more about <a href='https://en.bitcoin.it/wiki/Genesis_block'>the genesis block</a>.",
			referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
		},
		{
			type: "tx",
			date: "2018-03-21",
			txid: "f0cc5f92b11a6655a4939fc239e8bf960cd0453b87b5a0820ab36904279341a5",
			summary: "The coinbase transaction of the Genesis Block.",
			alertBodyHtml: "This transaction doesn't really exist! ",
			referenceUrl: "https://github.com/bitcoin/bitcoin/issues/3303"
		}

	],

	relatedSites : [
		{name: "Official Website", url:"https://yerbas.org/", imgUrl:"/img/logo/yerb.svg"},
		{name: "Discord", url:"https://discord.gg/XGEp2cKSKF", imgUrl:"/img/logo/discord.svg"},
		{name: "Twitter", url:"https://twitter.com/Yerbas_Endeavor", imgUrl:"/img/logo/twitter.svg"},
		{name: "Github", url:"https://github.com/The-Yerbas-Endeavor/yerbas", imgUrl:"/img/logo/github.png"}
	],

	blockRewardFunction:function(blockHeight) {
		blockHeight = Number(blockHeight);
		var nSubsidy = 100; // (declaring the reward variable and its original/default amount)
		var owlings = 21262; // amount of blocks between 2 owlings
		var multiplier; // integer number of owlings
		var tempHeight; // number of blocks since last anchor
		if (blockHeight < 420) {
        		nSubsidy = 4.20; 
    		} else if ((blockHeight > 1000000) && (blockHeight < 2000000)) {
        		nSubsidy = 80; 
    		} else if ((blockHeight > 2000000) && (blockHeight < 3000000)) {
       		 nSubsidy = 70;
    		} else if ((blockHeight > 3000000) && (blockHeight < 4000000)) {
        		nSubsidy = 50;
    		} else if ((blockHeight > 4000000) && (blockHeight < 5000000)) {
        		nSubsidy = 40;     
    		} else if ((blockHeight > 5000000) && (blockHeight < 6000000)) {
        		nSubsidy = 20;      
    		} else if ((blockHeight > 6000000) && (blockHeight < 7000000)) {
        		nSubsidy = 10;     
    		} else if ((blockHeight > 7000000) && (blockHeight < 8000000)) {
        		nSubsidy = 9;  
    		} else if ((blockHeight > 8000000) && (blockHeight < 9000000)) {
        		nSubsidy = 8;      
    		} else if ((blockHeight > 9000000) && (blockHeight < 10000000)) {
        		nSubsidy = 7;     
    		} else if ((blockHeight > 10000000) && (blockHeight < 11000000)) {
        		nSubsidy = 6;    
    		} else if ((blockHeight > 11000000) && (blockHeight < 12000000)) {
        		nSubsidy = 5;     
    		} else if ((blockHeight > 12000000) && (blockHeight < 13000000)) {
        		nSubsidy = 4.20;  
    		} else if ((blockHeight > 13000000) && (blockHeight < 14000000)) {
        		nSubsidy = 3;      
    		} else if ((blockHeight > 14000000) && (blockHeight < 15000000)) {
        		nSubsidy = 2;     
    		} else if ((blockHeight > 15000000) && (blockHeight < 16000000)) {
        		nSubsidy = 1; 
    		} else if (blockHeight > 16000000) {
        		nSubsidy = .420;
    		}
		return nSubsidy;
	},

	masternodeReward : function(blockHeight, blockReward) {
		return blockReward * 0.2
	},

	masternodeCollateral : function(blockHeight) {
		var collaterals = new Map();
		collaterals.set(69420, 2000);
		collaterals.set(100420, 16000);
		collaterals.set(200420, 22000);
		collaterals.set(302420, 28000);
		collaterals.set(420420, 340000);
		collaterals.set(Number.MAX_SAFE_INTEGER, 42000);
		for(const [collateralHeight, collateralValue] of collaterals.entries()) {
			if(Number(collateralHeight) >= Number(blockHeight)) {
				return collateralValue;
			}
			return collateralValue;
		}
	}
});

module.exports = Yerbas.properties;
