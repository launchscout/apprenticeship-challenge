import AltContainer from 'alt-container';
import React from 'react';
import ShoplistActions from '../actions/ShoplistActions';
import ProductActions from '../actions/ProductActions';
import ItemActions from '../actions/ItemActions';
import Products from './Products.jsx';
import ProductStore from '../stores/ProductStore';
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

@DropTarget(ItemTypes.PRODUCT, productTarget, (connect) => ({  // eslint-disable-line
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
            onDelete={this.deleteProduct} />
        </AltContainer>
      </div>
    );
  }

  addForm = () => {
    <ProdForm addProduct={this.addProduct}/>;
  };

  addItem = (product, itemType, value, editing) => {
    // debugger;
    // e.stopPropagation();
    const productId = product.id;
    const item = ItemActions.create({'itemType': itemType, 'value': value, 'editing': editing});
    ProductActions.attachToProduct({
      itemId: item.id,
      productId
    });
  };

  addProduct = (qty, name, price) => {
    // e.stopPropagation(product);
    const shoplistId = this.props.shoplist.id;
    const product = ProductActions.create({editing: false});
    this.addItem(product, 'qty', qty, false);
    this.addItem(product, 'prodName', name, false);
    this.addItem(product, 'price', price, false);
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

  // activateProductEdit(id) {
  //   ProductActions.update({id, editing: true});
  // }
}
