import React from 'react';
// import Prices from './Price.jsx';

export default class Item extends React.Component {
  constructor(props) {
    super(props);

    // Track `editing` state.
    this.state = {
      editing: false
    };
  }


  render() {
    // Render the component differently based on state.
    if(this.state.editing) {
      return this.renderEdit();
    }

    return this.renderItem();
    // return this.renderPrice();
  }


  renderEdit = () => {
       return <input type="text"
      // ref={
      //   (e) => e ? e.selectionStart = this.props.name.length : null
      // }
      autoFocus={true}
      defaultValue={this.props.name}

      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };

  renderItem = () => {
    const onDelete = this.props.onDelete;

    return (
      <div onClick={this.edit}>
        <span className="name">{this.props.name}</span>
        {onDelete ? this.renderDelete() : null }
      </div>
    );
  };

  renderDelete = () => {

    return <button className="delete-item"
    onClick={this.props.onDelete}>x</button>;
  };

  edit = () => {
    // Enter edit mode.
    this.setState({
      editing: true
    });
  };

  checkEnter = (e) => {
    // The user hit *enter*, let's finish up.
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = (e) => {

    const value = e.target.value;

    if(this.props.onEdit) {
      this.props.onEdit(value);
    <span className="sku">{this.props.sku}</span>
      // Exit edit mode.
      this.setState({
        editing: false
      });
    }
  };
}


