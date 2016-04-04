import React from 'react';
// import Row from 'react-bootstrap/lib/Row';
// import Col from 'react-bootstrap/lib/Col';

export default class Editable extends React.Component {
  render() {
    const {value, price, qty, onEdit, onValueClick, editing, ...props} = this.props;
    return (
      <div {...props}>
        {editing ? this.renderEdit() : this.renderValue()}
      </div>
    );
  }

  renderEdit = () => {
    return <input type='text'
      ref={
        (e) => e ? e.selectionStart = this.props.value.length : null
      }
      autoFocus={true}
      defaultValue={this.props.value}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };

  renderValue = () => {
    const onDelete = this.props.onDelete;
    return (
      // <div onClick={this.props.onValueClick}>
      //   <span className="price">{this.props.price}</span>
      //   <span className="value">{this.props.value}</span>
      //   <span className="qty">{this.props.qty}</span>
      //   {onDelete ? this.renderDelete() : null }
      // </div>

      <table>
        <tbody>
          <tr>
            <td onClick={this.props.onValueClick}>
              <span className="qty">{this.props.qty}</span>
            </td>
            <td onClick={this.props.onValueClick}>
              <span className="value">{this.props.value}</span>
            </td>
            <td onClick={this.props.onValueClick}>
              <span className="price">{this.props.price}</span>
            </td>
            <td onClick={this.props.onValueClick}>
              {onDelete ? this.renderDelete() : null }
            </td>
          </tr>
        </tbody>
      </table>

      // <Row>
      //   <Col xs={2} onClick={this.props.onValueClick}>
      //     <span className="qty">{this.props.qty}</span>
      //   </Col>
      //   <Col xs={6} onClick={this.props.onValueClick}>
      //     <span className="value">{this.props.value}</span>
      //   </Col>
      //   <Col xs={2} onClick={this.props.onValueClick}>
      //     <span className="price">{this.props.price}</span>
      //   </Col>
      //   <Col xs={2} onClick={this.props.onValueClick}>
      //     {onDelete ? this.renderDelete() : null }
      //   </Col>
      // </Row>
    );
  };

  renderDelete = () => {
    return <button
      className='delete'
      onClick={this.props.onDelete}>x</button>;
  };

  checkEnter = (e) => {
    // The user hit *enter*, let's finish up.
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = (e) => {
    const value = e.target.value;
    if (this.props.onEdit) {
      this.props.onEdit(value);
    }
  };
}
