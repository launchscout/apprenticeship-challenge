import React from 'react';

  //component definition
export default class Note extends React.Component {
  constructor(props) {
    super(props);

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
  }

  renderEdit = () => {
    return <input type="text"
      ref={
        (e) => e ? e.selectionStart = this.props.name.length : null
      }
      autoFocus={true}
      defaultValue={this.props.name}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
   };

   renderItem = () => {
      // If the user clicks a normal note, trigger editing logic.
      return <div onClick={this.edit}>{this.props.name}</div>;
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

        // Exit edit mode.
        this.setState({
          editing: false
        });
      }
    };
}
