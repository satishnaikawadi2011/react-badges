import React from 'react';
import { Badge } from 'react-badges';
import CartIcon from './CartIcon';

const App = () => {
	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center'
			}}
		>
			<Badge
				content={5}
				style={{ backgroundColor: 'red' }}
				verticalAlignment="top"
				horizontalAlignment="right"
				max={99}
				bgColor="black"
			>
				<CartIcon />
			</Badge>
			<Badge content="Danger" contentColor="#ffffff" />
			<Badge content="Success" bgColor="green" />
			<Badge content="Warning" bgColor="orange" />
			<Badge content="Info" bgColor="skyblue" />
		</div>
	);
};

export default App;
