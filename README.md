
<p align='center'>
  <img alt='Logo' src='https://res.cloudinary.com/dg2zkumuc/image/upload/v1618564550/React%20Badges/react-badges_oarucd.gif'>
</p>

# react-badges

> Customizable React Badges for your all kinds of Projects and WebSites.

<p align="center">
  <a href="https://www.npmjs.com/package/react-badges">
    <img alt= "NPM" src="https://img.shields.io/npm/v/react-badges.svg">
  </a>
  <a href="https://standardjs.com">
    <img alt="JavaScript Style Guide" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg">
  </a>
</p>

## Install

```bash
npm i react-badges
```

or

```bash
yarn add react-badges

## Usage

If you wanted to use them as notification badges like

![Notification Badges](https://res.cloudinary.com/dg2zkumuc/image/upload/v1618565084/React%20Badges/not-badges_apwwes.png)

you can use code like below

```tsx
import React from 'react';
import { Badge } from 'react-badges';
import MailIcon from './MailIcon';

const App = () => {
	return (
			<Badge
				content={4}
				verticalAlignment="top"
				horizontalAlignment="right"
			>
				<MailIcon />
			</Badge>
	);
};

export default App;

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
