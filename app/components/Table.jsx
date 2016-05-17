import React from 'react';
import Row from './Row.jsx';
import Header from './Header.jsx';


var Table = React.createClass({

  render() {
    return (
      <table>
        <Header />
        <tbody>
          {this.props.rowList.map(row =>
            <Row
              key={row.sku}
              item={row.item}
              sku={row.sku}
              price={row.price}
              removeItem={this.props.removeItem} />
          )}
        </tbody>
      </table>
    );
  }
});

export default Table;
