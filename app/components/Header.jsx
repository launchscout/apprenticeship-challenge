import React from 'react';

var Header = React.createClass({

  getInitialState(){
    return {
      listName: "My List",
      editing: false
    }
  },

  toggleEdit(){
    if(this.state.editing){
      this.setState({editing: false})
    } else {
      this.setState({editing: true})
    }
  },

  updateListName(event){
    this.setState({listName: event.target.value})
  },

 render() {
    if (this.state.editing) {
      return(
        <div>
          <input type='text' onChange={this.updateListName} />
          <a href="#" onClick={this.toggleEdit}>SAVE< /a>
        </div>
      )
    } else {
      return (
        <div>
          <h1>{this.state.listName}</h1>
          <a href="#" onClick={this.toggleEdit}>EDIT LIST NAME</a>
        </div>
      );
    }
  }

})

export default Header
