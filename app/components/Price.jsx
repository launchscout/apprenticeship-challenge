import React from 'react';

export default class Price extends React.Component {
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

    return this.renderPrice();
  }


  renderEdit = () => {
       return <input type="text"
      // ref={
      //   (e) => e ? e.selectionStart = this.props.name.length : null
      // }
      autoFocus={true}
      defaultValue={this.props.amount}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;

  };

  renderPrice = () => {
    const onDelete = this.props.onDelete;

    return (
      <div onClick={this.edit}>
        <span className="price">{this.props.amount}</span>
        {onDelete ? this.renderDelete() : null }
      </div>
    );
  };



  renderDelete = () => {
    return <button className="delete-price"
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
   // it through `defaultProps`.
    //
    // See the *Typing with React* chapter for more information.
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


