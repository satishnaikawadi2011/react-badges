# react-badges

> Customizable React Badges for your all kinds of Projects and WebSites.

[![NPM](https://img.shields.io/npm/v/react-badges.svg)](https://www.npmjs.com/package/react-badges) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-badges
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'react-badges'
import 'react-badges/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

### Properties

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`content`|string/number|yes||Content to be shown in the badge.|
`bgColor`|string|no|red|Background Color of the badge.|
`contentColor`|string|no|white|Color of the content of badge.|
`	verticalAlignment`|'top'/'bottom'|no|'top'|Vertical Alignment of the badge|
`horizontalAlignment`|'left'/'right'|no|'right'|Horizontal Alignment of the badge.
`max`|number|no|99|Max count to show.
`hideZero`|boolean|no|false|Controls whether the badge is hidden when badgeContent is zero.|
## License

MIT © [satishnaikawadi2011](https://github.com/satishnaikawadi2011)
