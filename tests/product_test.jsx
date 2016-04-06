import React from 'react';
import {renderIntoDocument} from 'react-addons-test-utils';
import TestBackend from 'react-dnd-test-backend';
import {DragDropContext} from 'react-dnd';
import assert from 'assert';
import Product from 'app/components/Product.jsx';

describe('Product', () => {
  it('renders children', () => {
    const test = 'test';
    const ProductContent = wrapInTestContext(Product);
    const component = renderIntoDocument(
      <ProductContent id="demo">{test}</ProductContent>
    );
    assert.equal(component.props.children, test);
  });
});

// https://gaearon.github.io/react-dnd/docs-testing.html
function wrapInTestContext(DecoratedComponent) {
  @DragDropContext(TestBackend)
  class TestContextContainer extends React.Component {
    render() {
      return <DecoratedComponent {...this.props} />;
    }
  }
  return TestContextContainer;
}
