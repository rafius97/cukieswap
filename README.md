# cukieswap

_Simple token swapper_

## Getting Started 🚀

### Pre-requisites 📋

_You need to have installed nodejs_

[See Hardhat setup enviroment tutorial](https://hardhat.org/tutorial/setting-up-the-environment.html)

### Installation 🔧

_First you need to clone this repository_

```
git clone https://github.com/raerocor97/cukieswap/
```

_Make sure you are in the right folder_

```
cd cukieswap/
```

_Next, you must to install the dependencies_

```
npm i
```

_Next, you need to compile the contracts_

```
npm run compile
```

_Finally, you need to put your Alchemy API Key in a .env file_
_in order to use the mainnet_

```
ALCHEMY_MAIN_API_KEY=<YOUR_API_KEY>
```

## Running tests ⚙️

_Run the tests to verify the swapping logic and upgradeability_

```
npm run test
```

**Make sure you set ALCHEMY_MAIN_API_KEY in your .env file**

## Deployment 📦

## Built with 🛠️

- [Solidity](https://docs.soliditylang.org/en/v0.7.6/)
- [Hardhat](https://hardhat.org/)
- [UniswapV2](https://uniswap.org/docs/v2/)
- [Balancer](https://docs.balancer.finance/)

## Author ✒️

- **Rafael Romero** - [raerocor97](https://github.com/raerocor97)

## License 📄

This project is under the MIT License - look up the file [LICENSE.md](LICENSE.md) for more details.
