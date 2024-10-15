# Know India

[![npm](https://img.shields.io/npm/v/knowindia.svg)](https://www.npmjs.com/package/knowindia)
![License](https://img.shields.io/npm/l/knowindia.svg)
![Downloads](https://img.shields.io/npm/dt/knowindia.svg)

## Overview

`knowindia` is an npm package that provides detailed information about Indian states and union territories. This package allows you to easily access and retrieve data related to each state and union territory in India.

## Installation

To install the `knowindia` package, use npm:

```bash
npm install knowindia
```

| Package Manager | Command              |
| --------------- | -------------------- |
| **Yarn**        | `yarn add knowindia` |
| **PNPM**        | `pnpm add knowindia` |
| **BUN**         | `bun add knowindia`  |

## Usage

Once you have installed the package, you can import it into your JavaScript file and use the provided functions to access data.

Importing the Package

- For projects using CommonJS, you can also import it as follows: 

```javascript
const { states, uts, India, INDIA } = require('knowindia');
```

- For projects using ES6 modules, you can also import it as follows:

```javascript
import { states, uts, India, INDIA } from 'knowindia';
```

## Functions

### `states()`

Returns an object containing data for all Indian states.

### Example:

```javascript
const allStates = states();
console.log(allStates);
```

### `uts()`

Returns an object containing data for all Union Territories in India.

```javascript
const allUTs = uts();
console.log(allUTs);
```

### `INDIA()`

Returns a combined object that includes data for both states and UTs.

### Example:

```javascript
const indiaData = INDIA();
console.log(indiaData);
```

### `India()`

Returns the IndiaData object. The structure and data should be defined in India.js.

### Example:

```javascript
const indiaDetails = India();
console.log(indiaDetails);
```

### Accessing Specific Data

You can also access specific state or UT data directly by referencing their keys.

### Example:

```javascript
const Delhi = uts().DL; // Access Delhi data
console.log(Delhi);
```

### Example Usage

For projects using CommonJS, you can also import it as follows: 

```javascript
const { states, uts, India, INDIA } = require('knowindia');
```


For projects using ES6 modules, you can also import it as follows:

```javascript
import { states, uts, India, INDIA } from 'knowindia';
console.log(states()); // Logs all states data
console.log(uts()); // Logs all union territories data
console.log(INDIA()); // Logs combined data for states and UTs

const Maharashtra = states().MH; // Access data for Maharashtra
console.log(Maharashtra);
```

### Indian States and Union Territories

#### Union Territories

- **Andaman and Nicobar Islands**: AN
- **Chandigarh**: CH
- **Dadra and Nagar Haveli and Daman and Diu**: DN
- **Lakshadweep**: LD
- **Delhi**: DL
- **Puducherry**: PY
- **Jammu and Kashmir**: JK
- **Ladakh**: LA

#### States

- **Andhra Pradesh**: AP
- **Arunachal Pradesh**: AR
- **Assam**: AS
- **Bihar**: BR
- **Chhattisgarh**: CG
- **Goa**: GA
- **Gujarat**: GJ
- **Haryana**: HR
- **Himachal Pradesh**: HP
- **Jharkhand**: JH
- **Karnataka**: KA
- **Kerala**: KL
- **Madhya Pradesh**: MP
- **Maharashtra**: MH
- **Manipur**: MN
- **Meghalaya**: ML
- **Mizoram**: MZ
- **Nagaland**: NL
- **Odisha**: OD
- **Punjab**: PB
- **Rajasthan**: RJ
- **Sikkim**: SK
- **Tamil Nadu**: TN
- **Telangana**: TG
- **Tripura**: TR
- **Uttar Pradesh**: UP
- **Uttarakhand**: UK
- **West Bengal**: WB


## Contributing

Contributions to the `knowindia` package are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://github.com/kuntalojha/knowindia/blob/main/LICENSE).