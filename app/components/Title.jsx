import React from 'react';

var Title = React.createClass({

  getInitialState(){
    return {
      listName: "My List",
      editing: false
    };
  },

  toggleEdit(){
    this.setState({editing: !this.state.editing})
  },

  updateListName(event){
    this.setState({listName: event.target.value})
  },

  renderSavedState () {
    return (
      <div>
        <h1>{this.state.listName}</h1>
        <a href="#" className='edit' onClick={this.toggleEdit}>Edit list name</a>
      </div>
    );
  },

  renderEditingState () {
    return(
      <div>
        <input type='text' onChange={this.updateListName} />
        <a href="#" className='edit' onClick={this.toggleEdit}>Save< /a>
      </div>
    )
  },

  render() {
    if (this.state.editing) {
      return this.renderEditingState();
    } else {
      return this.renderSavedState();
    }
  }
});

export default Title;
