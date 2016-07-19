import uuid from 'node-uuid';
import alt from '../libs/alt';
import ProductActions from '../actions/ProductActions';
import ItemStore from '../stores/ItemStore';

import Firebase from 'firebase';
var productData = new Firebase('https://stamates-shopping.firebaseio.com/products');

class ProductStore {
  constructor() {
    this.bindActions(ProductActions);
    this.products = [];
    productData.on("value", function(snapshot) {
      var items = [];
      snapshot.forEach(function(data) {
        items.push(data.val());
      }.bind(this));
      this.setState({products: items});
    }.bind(this));
    this.exportPublicMethods({
      getProductsByIds: this.getProductsByIds.bind(this),
      getProductLineTotal: this.getProductLineTotal.bind(this)
    });
  }
  create(product) {
    const products = this.products;
    product.id = uuid.v4();
    product.items = product.items || [''];
    this.setState({
      products: products.concat(product)
    });
    productData.push(product);
    return product;
  }
  update(updatedProduct) {
    // debugger;
    const products = this.products.map(product => {
      if (product.id === updatedProduct.id) {
        return Object.assign({}, product, updatedProduct);
      }
      return product;
    });
    this.setState({products});
    productData.set(products);
  }
  delete(id) {
    var validProducts = this.products.filter(product => product.id !== id);
    this.setState({
      products: validProducts
    });
    // Maintain products to be used for future list creation (lookup)
    // this.productsRef = new Firebase('https://stamates-shopping.firebaseio.com/products');
    // this.productsRef.set(validProducts);
  }
  attachToProduct({productId, itemId}) {
    const products = this.products.map(product => {
      if (product.id === productId) {
        if (product.items.includes(itemId)) {
          console.warn('Already attached item to product', products);
        } else {
          product.items.push(itemId);
        }
      }
      return product;
    });
    this.setState({products});
    productData.set(products);
  }
  getProductsByIds(ids) {
    return (ids || []).map(
      id => this.products.filter(product => product.id === id)
    ).filter(a => a.length).map(a => a[0]);
  }
  getProductLineTotal(productId) {
    const product = this.products.filter(product => product.id === productId)[0];
    const items = ItemStore.getItemsByIds(product.items);
    let qty = 0;
    let price = 0;
    for (var i in items) {
      if (items[i].itemType === 'qty') {
        qty = items[i].value;
      } else {
        if (items[i].itemType === 'price') {
          price = items[i].value;
        }
      }
    }
    return (qty * price);
  }
}

export default alt.createStore(ProductStore, 'ProductStore');
