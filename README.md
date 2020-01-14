<h1 align="center"> Tesra dApi </h1>

English / [中文](README_cn.md)

# tesra-dapi

API for dApps on Tesra blockchain. This is an implementation of dAPI from [OEP-6](https://github.com/user00000001/OEPs/blob/oep-dapp-api/OEP-6/OEP-6.mediawiki) communication protocol.

It is necessary to have installed suitable **dAPI provider** . Reference implementation is [Tesra Wallet](https://github.com/TesraSupernet/tesra-wallet).

The library is written in TypeScript, so all the methods and objects are typed. It is therefore usable in TypeScript projects as well as vanilla JavaScript projects.

## How to use 
tesra-dapi can be used as CommonJS/ES6 module or directly referencing in web page html. 

### Install CommonJS/ES module
```
npm install tesra-dapi
```

### Import CommonJS
```
var client = require('tesra-dapi').client;
```

### Import ES6 module
```
import { client } from 'tesra-dapi';
```

### Web require
The browser.js file under the '/lib' folder needs to be referenced from the page:
```
<script src="./lib/browser.js"></script>
```

The use of the code is required under the global namespace of Tst.
```
var client = dApi.client;
```

### Initialisation
dApp needs to register itself as a client with the tesra-dapi library to enable the communication.

```
import { client } from 'tesra-dapi';

client.registerClient({});
```

## Usage

Examples of usage can be found in [EXAMPLES.md](EXAMPLES.md) or in a [demo app](https://github.com/TesraSupernet/tesra-dapi-demo)

# Documentation

All the methods of dAPI from OEP-6 are organised into smaller units: **asset**, **identity**, **message**, **network**, **provider**, **smartContract** and **utils**.
The definitions of the methods can be found directly in the [OEP-6](https://github.com/user00000001/OEPs/blob/oep-dapp-api/OEP-6/OEP-6.mediawiki).

# Build

### Required Tools and Dependencies

* Node
* Npm

### Developing

Execute these commands in the project's root directory:

#### Download
```
git clone 'https://github.com/TesraSupernet/tesra-dapi.git'
cd tesra-dapi
```

#### Install

```
npm install
```

#### Development build
This will build the project with minimum polyfilling for better debug experience.

````
npm run build:dev
````

You will get the packaged code under '/lib'.

#### Production build 

````
npm run build:prod
````

You will get the packaged code under '/lib'

## Built With

* [TypeScript](https://www.typescriptlang.org/) - Used language
* [Node.js](https://nodejs.org) - JavaScript runtime for building

## Authors

* **user00000001** - *Initial work* - [user00000001](https://github.com/user00000001)

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details
