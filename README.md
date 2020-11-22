# @12emake/design-system

> Design system

[![NPM](https://img.shields.io/npm/v/@12emake/design-system.svg)](https://www.npmjs.com/package/@12emake/design-system) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Getting started

### npm

To install and save in your `package.json` dependencies, run:

```bash
// with npm
npm install --save @12emake/design-system

// with yarn
yarn add @12emake/design-system
```

### Add required fonts in index.html

```bash
// Roboto Font
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

// Font Icons
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

## Storybook

https://victortrinh.github.io/design-system/

## Example of usage

```tsx
import React, { Component } from 'react'

import MyComponent from '@12emake/design-system'
import '@12emake/design-system/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

MIT © [victortrinh](https://github.com/victortrinh)
