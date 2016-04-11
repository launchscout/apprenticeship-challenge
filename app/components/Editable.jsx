import React from 'react';
// import Col from 'react-bootstrap/lib/Col';

export default class Editable extends React.Component {
  render() {
    // debugger;
    const {editing, ...props} = this.props;
    return (
      <span {...props}>
        {editing ? this.renderEdit() : this.renderValue()}
      </span>
    );
  }

  renderEdit = () => {
    return <input type="text"
      ref={
        (e) => e ? e.selectionStart = this.props.value.length : null
      }
      autoFocus={true}
      defaultValue={this.props.value}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };

  renderValue = () => {
    return (
      <span name={this.props.item} onClick={this.props.onValueClick}>{this.props.value}</span>
    );
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
