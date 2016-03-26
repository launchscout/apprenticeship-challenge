import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import tape from 'tape';
import createComponent from 'react-unit';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import Name from '../components/Name.jsx'

console.log('Hello JavaScript');

const test = addAssertions(tape, {jsxEquals});

test('----- React Component Tests: Name -----', (t) => {

	const renderer = createRenderer();

	const component = createComponent.shallow(<Name name="shopping" />);

	// Test component props and content
	t.equal(component.text, 'shopping', 'name prop of component should be rendered as Name text "shopping list"');

	// Test rendered output
	renderer.render(<Name name="shopping" />);
	let actualElement = renderer.getRenderOutput();
	let expectedElement = <div onClick={function noRefCheck() {}}><span>shopping</span></div>;
	t.jsxEquals(actualElement, expectedElement);


	t.end();

});	