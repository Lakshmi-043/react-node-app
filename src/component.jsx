import React from 'react';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

export default function Component() {
	return (
		<div>
			<h1>Parent Component</h1>
			<Component1 />
			<Component2 />
			<Component3 />
		</div>
	);
}
