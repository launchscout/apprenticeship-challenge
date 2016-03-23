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
    return (
      <input type="text"
        ref={
          (e) => e ? e.selectionStart = this.props.body.length : null
        }
        autoFocus={true}
        defaultValue={this.props.body}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter} 
      />
    )
  };

  renderDelete = () => {
    return <button onClick={this.props.onDelete}>x</button>;
  };

  renderItem = () => {
    const onDelete = this.props.onDelete;

    return (
      <div onClick={this.edit}>
        <span>{this.props.body}</span>
        {onDelete ? this.renderDelete() : null }
      </div>
    );
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

      this.setState({
        editing: false
      });
    }
  };
}
