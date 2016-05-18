import React from 'react';
import Row from './Row.jsx';
import Header from './Header.jsx';


var Table = React.createClass({

  render() {
    return (
      <table>
        <Header list={this.props.rowList} />
        <tbody>
          {this.props.rowList.map(row =>
            <Row row={row}
              key={row.sku}
              removeItem={this.props.removeItem} />
          )}
        </tbody>
      </table>
    );
  }
});

export default Table;
