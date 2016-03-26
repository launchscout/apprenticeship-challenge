import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import tape from 'tape';
import createComponent from 'react-unit';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import Name from '../components/Name.jsx'

const test = addAssertions(tape, {jsxEquals});

test('----- React Component Tests: Name -----', (t) => {

	const renderer = createRenderer();

	const component = createComponent.shallow(<Name name="shopping" />);

	// Test component props and content
	t.equal(component.text, 'shopping', 'name prop of component should be rendered as Name text "shopping"');

	
	// Test rendered output
	//Initial Render
	renderer.render(<Name name="shopping" />);
	let actualElement = renderer.getRenderOutput();
	let expectedElement = <div onClick={function noRefCheck() {}}><span>shopping</span></div>;

	// Simulate Click
	renderer.getRenderOutput().props.onClick();	
	let clickedElement = renderer.getRenderOutput();
	let clickedExpectedElement = <input  ref={function noRefCheck() {}}  autoFocus={true}  defaultValue="shopping"  onBlur={function noRefCheck() {}}  onKeyPress={function noRefCheck() {}}  type="text"/>;


	t.jsxEquals(actualElement, expectedElement);
	t.jsxEquals(clickedElement, clickedExpectedElement);


	t.end();

});	