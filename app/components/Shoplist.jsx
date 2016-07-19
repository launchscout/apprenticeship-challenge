import AltContainer from 'alt-container';
import React from 'react';
import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
import ShoplistActions from '../actions/ShoplistActions';
import ProductActions from '../actions/ProductActions';
import ItemActions from '../actions/ItemActions';
import ProductStore from '../stores/ProductStore';
import Products from './Products.jsx';
import Editable from './Editable.jsx';
import ProdForm from './Form.jsx';

const productTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    if (targetProps.shoplist.products.length == 1) {
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
          <span className="shoplist-total">
            Total = ${shoplist.total}
          </span>
          <Editable className="shoplist-name" editing={shoplist.editing}
            value={shoplist.name} onEdit={this.editName} />
          <div className="shoplist-delete">
            <button onClick={this.deleteShoplist}>X</button>
          </div>
        </div>
        <ProdForm addProduct={this.addProduct}/>
        <div>
          <br/>
          <span className="qty">Qty</span>
          <span className="prodName"d>Product</span>
          <span className="price">Price/Qty</span>
          <span className="product-delete">Delete</span>
        </div>
        <AltContainer
          stores={[ProductStore]}
          inject={{
            products: () => ProductStore.getProductsByIds(shoplist.products)
          }}
        >
          <Products
            onUpdate={this.updateShoplistTotal}
            onDelete={this.deleteProduct} />
        </AltContainer>
      </div>
    );
  }

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
    // TODO add error handling if qty and/or price is not a number
    const shoplistId = this.props.shoplist.id;
    const product = ProductActions.create({editing: false});
    let total = this.props.shoplist.total + qty * price;
    this.addItem(product, 'qty', qty, false);
    this.addItem(product, 'prodName', name, false);
    this.addItem(product, 'price', price, false);
    ShoplistActions.attachToShoplist({
      productId: product.id,
      shoplistId
    });
    ShoplistActions.update({total, id: shoplistId});
  };

  deleteProduct = (productId, e) => {
    e.stopPropagation();
    const shoplistId = this.props.shoplist.id;
    let total = this.props.shoplist.total -
      ProductStore.getProductLineTotal(productId);
    ShoplistActions.detachFromShoplist({shoplistId, productId});
    ProductActions.delete(productId);
    ShoplistActions.update({total, id: shoplistId});
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

  updateShoplistTotal = () => {
    const shoplist = this.props.shoplist;
    let total = 0;
    for (var i in shoplist.products) {
      if (shoplist.products[i] !== '') {
        total = total + ProductStore.getProductLineTotal(shoplist.products[i]);
      }
    }
    ShoplistActions.update({total, id: shoplist.id});
  };
}
