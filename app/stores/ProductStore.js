import uuid from 'node-uuid';
import alt from '../libs/alt';
import ProductActions from '../actions/ProductActions';
import Firebase from 'firebase';

class ProductStore {
  constructor() {
    this.bindActions(ProductActions);
    this.products = [];
    var temp = new Firebase('https://stamates-shopping.firebaseio.com/products');
    temp.once("value", function(snapshot) {
      var items = [];
      snapshot.forEach(function(data){
        items.push(data.val());
      }.bind(this));
      this.setState({ products: items });
    }.bind(this));
    this.exportPublicMethods({
      getProductsByIds: this.getProductsByIds.bind(this)
    });
  }
  create(product) {
    const products = this.products;
    product.id = uuid.v4();
    this.setState({
      products: products.concat(product)
    });
    this.productsRef = new Firebase('https://stamates-shopping.firebaseio.com/products');
    this.productsRef.push(product);
    return product;
  }
  update(updatedProduct) {
    const products = this.products.map(product => {
      if (product.id === updatedProduct.id) {
        return Object.assign({}, product, updatedProduct);
      }
      return product;
    });
    this.setState({products});
    this.productsRef = new Firebase('https://stamates-shopping.firebaseio.com/products');
    this.productsRef.set(products);
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
  getProductsByIds(ids) {
    return (ids || []).map(
      id => this.products.filter(product => product.id === id)
    ).filter(a => a.length).map(a => a[0]);
  }
}

export default alt.createStore(ProductStore, 'ProductStore');
