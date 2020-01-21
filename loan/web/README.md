# Big Data Watermarking Demo

This project is a simple data chain application that records transactions on ethereum.
It intends to be very simple and generic.
The functionality is provided by two Smart Contracts:

* RegistrationTrans - Register actors,Register data, and Ownership Transfer
* AccessOwner - Access policy, Data request, Buyer's validation, and Data Permission.
We have a simple web interface to interact with the contracts that assume three roles: Actors registration, Data registration, and Data monetization.
Each has its own view (page) and we keep them separated to better demonstrate how different actors could use the contracts.
## Setup and Running

The contract logic, migrations and tests use [Truffle](https://truffleframework.com/truffle) and [Ganache](https://truffleframework.com/ganache) as basic environment, so first install them:

`npm install -g ganache-cli truffle`

Also, we host our interface with http-server, a simple node package, so install it too:

Install [Metamask](https://metamask.io/) to enable interactions using the web interface.

Run ganache-cli and take note of the mnemonic from the console output.
Setup Metamask with the mnemonic and connect to "localhost:8545", you should see all the wallets ganache creates and now we can use them to call Smart Contract methods!

Whenever you want to run the interface again, make sure ganache-cli is using the same mnemonic as the first time, or reconfigure metamask.
With ganache running, we need to deploy our contracts.
Go to the project folder and run:

`truffle migrate --reset`

Truffle should compile and deploy the contracts, writing their addresses to the console.
Take note of the RegistrationTrans and AccessOwner addresses and replace the values on "web/js/utils.js".
The parts you need to change are:

```
window.pm.options.address = '0x412033a57740ec1eb21fe3822eaf780672b2ce73'
...
window.co.options.address = "0xa57a3f72873879a11989178640dc53b5139dd470"
```

With that ready, go to the "web" folder and run `http-server` to start a web server on port 8080.
Open your browser and go to "localhost:8080" to check the interface.

The flow implemented is the following:

Actors registration:

* Register actor selecting their type
* Click on login for entering into the network

Data registration:

* Depending upon the actor-type one can enter the details of a data unit to register the data
* Fill next collector's ID and click on "Transfer Ownership" to transfer the ownership of the data
* Enter the transfer ID to get a complete tracibility of the data

Data monetization:

* Login as a buyer for requesting a chunk of data from one of the owner
* Contact the owner to get the lookup-id and interaction-id
* Enter the ID's to get the data

## Observations

The interface was developed to be used by several actors, so each of them has a specific address.
Metamask allows a single visible wallet at a time, so don't forget to change it when you change roles.

## References

* [Truffle Suite](https://truffleframework.com/)
* [Materialize](https://materializecss.com/)
