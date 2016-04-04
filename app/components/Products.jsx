import React from 'react';
import Editable from './Editable.jsx';
import Product from './Product.jsx';
import ShoplistActions from '../actions/ShoplistActions';

export default ({products, onValueClick, onEdit, onDelete}) => {
  return (
    <ul className="products">{products.map(product =>
      <Product className="product" id={product.id} key={product.id}
        editing={product.editing} onMove={ShoplistActions.move}
        onDelete={onDelete.bind(null, product.id)} >
        <table>
          <tbody>
            <tr>
              <td>
                <Editable
                  editing={product.editing}
                  value={product.qty}
                  onEdit={onEdit.bind(null, product.id)}/>
              </td>
              <td>
                <Editable
                  editing={product.editing}
                  value={product.prodName}
                  onEdit={onEdit.bind(null, product.id)}/>
              </td>
              <td>
                <Editable
                  editing={product.editing}
                  value={product.price}
                  onEdit={onEdit.bind(null, product.id)}/>
              </td>
              <td id="del">del</td>
            </tr>
          </tbody>
        </table>
      </Product>
    )}</ul>
  );
};

// TODO need to create separate components for qty, prodName, and price to allow
// for editing each value individually
//
// export default ({products, onValueClick, onEdit, onDelete}) => {
//   return (
//     <ul className="products">{products.map(product =>
//       <Product className="product" id={product.id} key={product.id}
//         editing={product.editing} onMove={ShoplistActions.move}
//         onDelete={onDelete.bind(null, product.id)} >
//         <table>
//           <tbody>
//             <tr>
//               <td>
//                 <Editable
//                   editing={product.editing}
//                   value={product.qty}
//                   onValueClick={onValueClick.bind(null, product.id)}
//                   onEdit={onEdit.bind(null, product.id)}/>
//               </td>
//               <td>
//                 <Editable
//                   editing={product.editing}
//                   value={product.prodName}
//                   onValueClick={onValueClick.bind(null, product.id)}
//                   onEdit={onEdit.bind(null, product.id)}/>
//               </td>
//               <td>
//                 <Editable
//                   editing={product.editing}
//                   value={product.price}
//                   onValueClick={onValueClick.bind(null, product.id)}
//                   onEdit={onEdit.bind(null, product.id)}/>
//               </td>
//               <td>X</td>
//             </tr>
//           </tbody>
//         </table>
//       </Product>
//     )}</ul>
//   );
// };
