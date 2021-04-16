import React from 'react';
import { Badge } from 'react-badges';
import CartIcon from './CartIcon';

const App = () => {
	return (
		<div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
		</div>
	);
};

export default App;
