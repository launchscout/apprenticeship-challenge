import assert from 'assert';
import ProductActions from 'app/actions/ProductActions';
import ProductStore from 'app/stores/ProductStore';
import alt from 'app/libs/alt';

describe('ProductStore', () => {
  beforeEach(() => {
    alt.flush();
  });

  it('creates products', () => {
    const prod_name = 'test';
    ProductActions.create({prod_name});
    const state = ProductStore.getState();
    assert.equal(state.products.length, 1);
    assert.equal(state.products[0].prod_name, prod_name);
  });

  it('updates products', () => {
    const prod_name = 'test';
    const updatedProd_name = 'test 2';
    ProductActions.create({prod_name});
    const product = ProductStore.getState().products[0];
    ProductActions.update({...product, prod_name: updatedProd_name});
    const state = ProductStore.getState();
    assert.equal(state.products.length, 1);
    assert.equal(state.products[0].prod_name, updatedProd_name);
  });

  it('deletes products', () => {
    ProductActions.create({prod_name: 'test'});
    const product = ProductStore.getState().products[0];
    ProductActions.delete(product.id);
    const state = ProductStore.getState();
    assert.equal(state.products.length, 0);
  });

  it('gets products', () => {
    const prod_name = 'test';
    ProductActions.create({prod_name: prod_name});
    const product = ProductStore.getState().products[0];
    const products = ProductStore.getProductsByIds([product.id]);
    assert.equal(products.length, 1);
    assert.equal(products[0].prod_name, prod_name);
  });
});
