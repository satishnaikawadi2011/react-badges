import React from 'react';

import { Badge } from 'react-badges';
import 'react-badges/dist/index.css';

const App = () => {
	return (
		<Badge content={100} max={99} bgColor="black" verticalAlignment="bottom" horizontalAlignment="right">
			<h1>Lavdya</h1>
		</Badge>
	);
};

export default App;
