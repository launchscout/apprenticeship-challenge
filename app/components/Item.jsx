import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      editing: false
    };
  }


  render() {

    if(this.state.editing) {
      return this.renderEdit();
    }

    return this.renderItem();
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
        <span className="sku">{this.props.sku}</span>

        {onDelete ? this.renderDelete() : null }
      </div>
    );
  };

  renderDelete = () => {

    return <button className="delete-item"
    onClick={this.props.onDelete}>x</button>;
  };

  edit = () => {
    this.setState({
      editing: true
    });
  };

  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = (e) => {

    const value = e.target.value;

    if(this.props.onEdit) {
      this.props.onEdit(value);
    <span className="sku">{this.props.sku}</span>
      this.setState({
        editing: false
      });
    }
  };
}


