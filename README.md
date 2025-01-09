# Know India

[![npm](https://img.shields.io/npm/v/knowindia.svg)](https://www.npmjs.com/package/knowindia)
![License](https://img.shields.io/npm/l/knowindia.svg)
![Downloads](https://img.shields.io/npm/dt/knowindia.svg)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/knowindia)

## Overview

`knowindia` is an npm package that provides detailed information about Indian states and union territories. This package allows you to easily access and retrieve data related to each state and union territory in India.

## Installation

To install the `knowindia` package, use npm:

```bash
npm i knowindia
```

| Package Manager | Command                 |
| --------------- | ----------------------- |
| **NPM**         | `npm install knowindia` |
| **YARN**        | `yarn add knowindia`    |
| **PNPM**        | `pnpm add knowindia`    |
| **BUN**         | `bun add knowindia`     |

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

```
{
  allStates: {
    AP: 'Andhra Pradesh',
    AR: 'Arunachal Pradesh',
    AS: 'Assam',
    BR: 'Bihar',
    CG: 'Chhattisgarh',
    GA: 'Goa',
    GJ: 'Gujarat',
    HR: 'Haryana',
    HP: 'Himachal Pradesh',
    JH: 'Jharkhand',
    KA: 'Karnataka',
    KL: 'Kerala',
    MP: 'Madhya Pradesh',
    MH: 'Maharashtra',
    MN: 'Manipur',
    ML: 'Meghalaya',
    MZ: 'Mizoram',
    NL: 'Nagaland',
    OD: 'Odisha',
    PB: 'Punjab',
    RJ: 'Rajasthan',
    SK: 'Sikkim',
    TN: 'Tamil Nadu',
    TG: 'Telangana',
    TR: 'Tripura',
    UP: 'Uttar Pradesh',
    UK: 'Uttarakhand',
    WB: 'West Bengal'
  },
  allUts: {
    AN: 'Andaman and Nicobar Islands',
    CH: 'Chandigarh',
    DN: 'Dadra and Nagar Haveli and Daman and Diu',
    LD: 'Lakshadweep',
    DL: 'Delhi',
    PY: 'Puducherry',
    JK: 'Jammu and Kashmir',
    LA: 'Ladakh'
  }
}
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
const WestBengal = states().WB; // Access West Bengal data
console.log(WestBengal);
const Delhi = uts().DL; // Access Delhi data
console.log(Delhi);

```

## Accessing Specific Data

**You can also access specific state data directly by referencing their keys.**

### Example:

```javascript
const WestBengal = states().WB; // Access West Bengal data
console.log(WestBengal);
```

### Output:

```
{
  name: 'West Bengal',
  capital: 'Kolkata',
  area: '88,752 km²',
  population: '104 million (2023 est.)',
  officialLanguages: [ 'Bengali', 'English' ],
  literacyRate: '77.9%',
  stateAnimal: 'Fishing Cat',
  stateBird: 'White-throated Kingfisher',
  stateFlower: 'Night-flowering Jasmine',
  stateTree: 'Devil Tree',
  famousFor: [
    'Howrah Bridge',
    'Victoria Memorial',
    'Sundarbans',
    'Darjeeling Tea'
  ],
  festivals: [ 'Durga Puja', 'Kali Puja', 'Poush Mela', 'Rath Yatra' ],
  cuisine: [ 'Roshogolla', 'Macher Jhol', 'Shorshe Ilish', 'Sandesh' ],
  touristAttractions: [
    { name: 'Sundarbans National Park', type: 'National Park' },
    { name: 'Victoria Memorial', type: 'Historical Monument' },
    { name: 'Darjeeling', type: 'Hill Station' },
    { name: 'Kalimpong', type: 'Hill Station' }
  ],
  history: 'West Bengal has a rich history with contributions to literature, art, and the freedom movement. It was home to the Bengal Re
naissance, with key figures like Rabindranath Tagore and Swami Vivekananda shaping modern India.',
  interestingFacts: [
    'Home to the largest mangrove forest, Sundarbans.',
    'The birthplace of Rabindranath Tagore, Asia’s first Nobel laureate.',
    'Known for its vibrant Durga Puja celebrations.'
  ]
}
```

**You can also access specific state or UT data directly by referencing their keys.**

### Example:

```javascript
const Delhi = uts().DL; // Access Delhi data
console.log(Delhi);
```

### Output:

```
{
  name: 'Delhi',
  capital: 'New Delhi',
  area: '1,484 km²',
  population: '31.2 million (2023 est.)',
  officialLanguages: [ 'Hindi', 'English', 'Punjabi', 'Urdu' ],
  literacyRate: '88.7%',
  utAnimal: 'Nilgai',
  utBird: 'House Sparrow',
  utFlower: 'Alamanda',
  utTree: 'Jamun Tree',
  famousFor: [ 'India Gate', 'Red Fort', 'Qutub Minar', 'Lotus Temple' ],
  festivals: [ 'Diwali', 'Holi', 'Eid', 'Lohri' ],
  cuisine: [ 'Chole Bhature', 'Paratha', 'Butter Chicken', 'Biryani' ],
  touristAttractions: [
    { name: 'Red Fort', type: 'Historical Monument' },
    { name: 'Qutub Minar', type: 'Monument' },
    { name: 'India Gate', type: 'War Memorial' },
    { name: 'Lotus Temple', type: 'Temple' }
  ],
  history: "Delhi has a storied history, serving as the seat of several empires over centuries. It was founded by the Pandavas in ancien
t times and later saw rule by the Mughals, British, and eventually became India's capital post-independence.",
  interestingFacts: [
    'Delhi is the second most populous city in India.',
    'It houses the President’s residence, Rashtrapati Bhavan.',
    'Chandni Chowk is one of the oldest and busiest markets in India.'
  ]
}
```

### Indian States and Union Territories Short Codes

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

#### Union Territories

- **Andaman and Nicobar Islands**: AN
- **Chandigarh**: CH
- **Dadra and Nagar Haveli and Daman and Diu**: DN
- **Lakshadweep**: LD
- **Delhi**: DL
- **Puducherry**: PY
- **Jammu and Kashmir**: JK
- **Ladakh**: LA

## Contributing

Contributions to the `knowindia` package are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://github.com/kuntalojha/knowindia/blob/main/LICENSE).
