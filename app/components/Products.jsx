import React from 'react';
import Product from './Product.jsx';

export default ({products, onDelete}) => {
  return (
    <ul className="products">{products.map(product =>
      <li>
        <Product className="product" key={product.id} product={product}
          editing={product.editing} onDelete={onDelete.bind(null, product.id)} />
      </li>
    )}</ul>
  );
};
