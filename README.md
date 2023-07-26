# Selfkey.ID Payload Authorization Contracts

## Overview
Selfkey ID Authorization Smart Contract.
Signature based authorization mechanism for onchain transactions.

## Development

All smart contracts are implemented in Solidity `^0.8.19`, using [Hardhat](https://hardhat.org/) as the Solidity development framework.

### Prerequisites

* [NodeJS](htps://nodejs.org), v16.1.0+
* [Hardhat](https://hardhat.org/), which is a comprehensive framework for Ethereum development.

### Initialization

    npm install

### Testing

    npx hardhat test

or with code coverage

    npx hardhat coverage


### Contract method interface

The following public functions are provided:

* `getMessageHash(address _from, address _to, string memory _scope, bytes32 _param, uint _timestamp) returns (bytes32)` : obtain hash
* `getEthSignedMessageHash(bytes32 _messageHash) returns (bytes32)` : obtain signed message hash
* `setMinimumAmount(uint _amount)` _onlyOwners_: allows owners to change the minimum payment amoutn required
* `verify(address _signer, address _from, address _to, string memory _scope, bytes32 _param, uint _timestamp, bytes memory signature) returns (bool)`: Verify if hash correctly signed
* `authorize(address _from, address _to, string memory _scope, bytes32 _param, uint _timestamp, address signer, bytes memory signature) returns (bool)`: Returns true if hash is valid
* `recoverSigner(bytes32 _ethSignedMessageHash, bytes memory _signature) returns (address)`: Recover signer

### Contract addresses

```
Polygon Mumbai: 0x1e4BBcF6c10182C03c66bDA5BE6E04509bE1160F
Polygon Mainnet:
Signer Mumbai: 0x89145000ADBeCe9D1FFB26F645dcb0883bc5c3d9
Signer: 0xb9A775aeef418ed43B6529Fa9695daF28899156e
```

### Deploying and upgrading contract

Deploy proxy and initial version of the contract
```
npx hardhat run scripts/deploy.js --network mumbai
```

### Verifying contract

```
npx hardhat verify --network mumbai <contract_address>
```


## Contributing

Please see the [contributing notes](CONTRIBUTING.md).
