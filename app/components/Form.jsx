import React from 'react';

var Form = React.createClass({
  render () {
    return (
      <form>
        <input type='text' placeholder='Item Name' onChange={this.props.updateName} />
        <input type='text' placeholder= 'Price' onChange={this.props.updatePrice} />
        <button className='button' onClick={this.props.addItem}>+</button>
      </form>
    );
  }
});

export default Form;