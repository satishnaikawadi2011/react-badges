
<p align='center'>
  <img alt='Logo' src='https://res.cloudinary.com/dg2zkumuc/image/upload/v1618564550/React%20Badges/react-badges_oarucd.gif'>
</p>

# react-badges

> Customizable and Reusable React Badge component for your all kinds of Projects and WebSites.

<p align="center">
  <a href="https://www.npmjs.com/package/react-badges">
    <img alt= "NPM" src="https://img.shields.io/npm/v/react-badges.svg">
  </a>
  <a href="https://standardjs.com">
    <img alt="JavaScript Style Guide" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg">
  </a>
</p>


<p align='center'>
  <img alt='Code Demo' src='https://res.cloudinary.com/dg2zkumuc/image/upload/v1618568417/React%20Badges/carbon_2_uz24gr.png'>
</p>

## Install

```bash
npm i react-badges
```

or

```bash
yarn add react-badges
```
## Usage

If you wanted to use them as notification badges like

<p align='center'>
  <img alt='Notification Badges' src='https://res.cloudinary.com/dg2zkumuc/image/upload/v1618565084/React%20Badges/not-badges_apwwes.png'>
</p>

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
### OR

If you wanter to use them as regular simple badges like

<p align='center'>
  <img alt='Regular Badges' src='https://res.cloudinary.com/dg2zkumuc/image/upload/v1618565814/React%20Badges/str-badges_pi9jmq.png'>
</p>

you can use cod like below

```tsx
import React from 'react';
import { Badge } from 'react-badges';

const App = () => {
	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'space-around',
				width: '60vw',
				alignItems: 'center'
			}}
		>
			<Badge content="Danger" contentColor="#ffffff" />
			<Badge content="Success" bgColor="green" />
			<Badge content="Warning" bgColor="orange" />
			<Badge content="Info" bgColor="skyblue" />
		</div>
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
