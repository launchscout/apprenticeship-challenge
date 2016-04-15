import React from 'react';
import Product from './Product.jsx';
import ShoplistActions from '../actions/ShoplistActions';

export default ({products, onUpdate, onDelete}) => {
  return (
    <ul className="products">{products.map(product =>
      <li>
        <Product className="product" id={product.id} key={product.id}
          product={product} editing={product.editing}
          onMove={ShoplistActions.move}
          onUpdate={onUpdate.bind(null)}
          onDelete={onDelete.bind(null, product.id)} />
      </li>
    )}</ul>
  );
};
