 function init_web3() {
    //Web3 init
    /*
    if (typeof web3 != 'undefined') {
        web3 = new Web3(web3.currentProvider) // what Metamask injected
    } else {
        // Instantiate and set Ganache as your provider
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
      */
  var  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

    //Load accounts
    window.accounts = ["0x26fce4c0038731d800917a4c4bed9f85cfa83a70"];
    console.log("Loaded accounts");

    // The interface definition for your smart contract (the ABI)
    window.pm = new web3.eth.Contract([
		{
			"constant": false,
			"inputs": [
				{
					"name": "u_id",
					"type": "uint256"
				},
				{
					"name": "aadhar",
					"type": "uint256"
				},
				{
					"name": "accountno",
					"type": "uint256"
				},
				{
					"name": "age",
					"type": "uint256"
				},
				{
					"name": "familyno",
					"type": "uint256"
				},
				{
					"name": "caste",
					"type": "string"
				},
				{
					"name": "religion",
					"type": "string"
				},
				{
					"name": "literacy",
					"type": "string"
				}
			],
			"name": "personalInfo",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "entid",
					"type": "uint256"
				},
				{
					"name": "accountno",
					"type": "uint256"
				},
				{
					"name": "accounttype",
					"type": "string"
				},
				{
					"name": "accountbal",
					"type": "uint256"
				}
			],
			"name": "loanaccountinfo",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "Users",
			"outputs": [
				{
					"name": "_userName",
					"type": "string"
				},
				{
					"name": "_passWord",
					"type": "string"
				},
				{
					"name": "_address",
					"type": "address"
				},
				{
					"name": "_userType",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "Enterpreneurs",
			"outputs": [
				{
					"name": "_enterpreneur_u_id",
					"type": "uint256"
				},
				{
					"name": "_enterpreneur_aadhar",
					"type": "uint256"
				},
				{
					"name": "_enterpreneur_account",
					"type": "uint256"
				},
				{
					"name": "_enterpreneur_age",
					"type": "uint256"
				},
				{
					"name": "_enterpreneur_familyno",
					"type": "uint256"
				},
				{
					"name": "_enterpreneur_caste",
					"type": "string"
				},
				{
					"name": "_enterpreneur_religion",
					"type": "string"
				},
				{
					"name": "_enterpreneur_literacy",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "Shgss",
			"outputs": [
				{
					"name": "_enterpreneur_occupation",
					"type": "string"
				},
				{
					"name": "_enterpreneur_income",
					"type": "string"
				},
				{
					"name": "_enterpreneur_savings",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "_t_id",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "_u_id",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "occupation",
					"type": "string"
				},
				{
					"name": "income",
					"type": "string"
				},
				{
					"name": "savings",
					"type": "string"
				}
			],
			"name": "shg",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "Ente_id",
					"type": "uint256"
				}
			],
			"name": "getSHG",
			"outputs": [
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "name",
					"type": "string"
				},
				{
					"name": "pass",
					"type": "string"
				},
				{
					"name": "u_add",
					"type": "address"
				},
				{
					"name": "utype",
					"type": "string"
				}
			],
			"name": "createUser",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "Ent_id",
					"type": "uint256"
				}
			],
			"name": "getEnterpreneur",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				},
				{
					"name": "",
					"type": "uint256"
				},
				{
					"name": "",
					"type": "uint256"
				},
				{
					"name": "",
					"type": "uint256"
				},
				{
					"name": "",
					"type": "uint256"
				},
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "uid",
					"type": "uint256"
				},
				{
					"name": "pass",
					"type": "string"
				},
				{
					"name": "utype",
					"type": "string"
				}
			],
			"name": "userLogin",
			"outputs": [
				{
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "get_details",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				},
				{
					"name": "",
					"type": "uint256"
				},
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "_e_id",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		}
	])
 window.pm.options.address = '0xb439412e2a93d19265dbb29aaeb29b615add54a4'

}
export {
  init_web3
}
