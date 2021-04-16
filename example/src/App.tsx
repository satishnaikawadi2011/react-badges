import React from 'react';
import { Badge } from 'react-badges';
import CartIcon from './CartIcon';

const App = () => {
	return (
		<Badge content={5} style={{ backgroundColor: 'red' }} horizontalAlignment="right" max={99} bgColor="black">
			<CartIcon />
		</Badge>
	);
};

export default App;
