import AltContainer from 'alt-container';
import React from 'react';
import Products from './Products.jsx';
import ProductActions from '../actions/ProductActions';
import ProductStore from '../stores/ProductStore';
import ShoplistActions from '../actions/ShoplistActions';
import Editable from './Editable.jsx';
import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
import ProdForm from './Form.jsx';

const productTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    if (!targetProps.shoplist.products.length) {
      ShoplistActions.attachToShoplist({
        shoplistId: targetProps.shoplist.id,
        productId: sourceId
      });
    }
  }
};

@DropTarget(ItemTypes.NOTE, productTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
export default class Shoplist extends React.Component {
  render() {
    const {connectDropTarget, shoplist, ...props} = this.props;
    return connectDropTarget(
      <div {...props}>
        <div className="shoplist-header" onClick={this.activateShoplistEdit}>
          <Editable className="shoplist-name" editing={shoplist.editing}
            value={shoplist.name} onEdit={this.editName} />
          <div className="shoplist-delete">
            <button onClick={this.deleteShoplist}>X</button>
          </div>
        </div>
        <ProdForm addProduct={this.addProduct}/>
        <table>
          <tbody>
            <tr>
              <td>Qty</td>
              <td>Product</td>
              <td>Price</td>
              <td>Delete</td>
            </tr>
          </tbody>
        </table>
        <AltContainer
          stores={[ProductStore]}
          inject={{
            products: () => ProductStore.getProductsByIds(shoplist.products)
          }}
        >
          <Products
            onValueClick={this.activateProductEdit}
            onEdit={this.editProduct}
            onDelete={this.deleteProduct} />
        </AltContainer>
      </div>
    );
  }

  editProduct(id, value, item) {
    // Don't modify if trying set an empty value
    if (!value.trim()) {
      ProductActions.update({id, editing: false});
      return;
    }
    ProductActions.update({id, value, item, editing: false});
  }

  addForm = (e) => {
    <ProdForm addProduct={this.addProduct}/>
  }

  addProduct = (qty, name, price, e) => {
    // If product is added, avoid opening shoplist name edit by stopping
    // event bubbling in this case.
    // e.stopPropagation();
    const shoplistId = this.props.shoplist.id;
    const product = ProductActions.create({prodName: name, qty: qty, price: price, editing: false});
    ShoplistActions.attachToShoplist({
      productId: product.id,
      shoplistId
    });
  };

  deleteProduct = (productId, e) => {
    e.stopPropagation();
    const shoplistId = this.props.shoplist.id;
    ShoplistActions.detachFromShoplist({shoplistId, productId});
    ProductActions.delete(productId);
  };

  editName = (name) => {
    const shoplistId = this.props.shoplist.id;
    // Don't modify if trying set an empty value
    if (!name.trim()) {
      ShoplistActions.update({id: shoplistId, editing: false});
      return;
    }
    ShoplistActions.update({id: shoplistId, name, editing: false});
  };

  deleteShoplist = () => {
    const shoplistId = this.props.shoplist.id;
    ShoplistActions.delete(shoplistId);
  };

  activateShoplistEdit = () => {
    const shoplistId = this.props.shoplist.id;
    ShoplistActions.update({id: shoplistId, editing: true});
  };

  activateProductEdit(id) {
    ProductActions.update({id, editing: true});
  }
}
