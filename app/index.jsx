import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Navigation } from 'react-router';
import { browserHistory } from 'react-router'; //loads code to do push state
import helpers from './helpers';


var App = React.createClass({

  render : function() {
    var name = "Robert";
      return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Seafood Market" />
          </div>
            <Order/>
            <Inventory/>
        </div>
      )
  }
});

var AddFishForm = React.createClass({

  createFish : function(event) {
    event.preventDefault();
    var fish = {
      name : this.refs.name.value,
      price : this.refs.status.value,
      status : this.refs.status.value,
      desc : this.refs.desc.value,
      image : this.refs.image.value
    }
    console.log(fish);

  },

  render : function() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" ref="name" placeholder="Fish Name"></input>
        <input type="text" ref="price" placeholder="Fish Price"></input>
        <select ref="status">
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" ref="desc" placeholder="Desc"></textarea>
        <input type="text" ref="image" placeholder="URL to Image" />
        <button type="submit"> Add Item</button>
      </form>
    )
  }
});

var Header = React.createClass({

  render : function() {

    return (
      <header className="top">
        <h1>Catch of the Day</h1>
        <h3 className="tagline">{this.props.tagline}</h3>
      </header>
    )
  }
});

var Order = React.createClass({

  render : function() {
    return (
      <p>Order!</p>
    )
  }
});

var Inventory = React.createClass({

  render : function() {
    return (
      <div>
      <h2>Inventory!</h2>
      <AddFishForm/>
      </div>
    )
  }
});

var StorePicker = React.createClass({
  goToStore : function(event) {
    // prevents submit button from going into post and changing pages. note 'event' in function parameter also necessary
    event.preventDefault();
    // get data from input
    var storeId = this.refs.storeId.value; //ref refers to reference input in input html.
    browserHistory.push('/store/' + storeId);
  },
  handleSubmit() {
    console.log('This is happening');

  },
  render : function() {
      return (
        <form className= "store-selector" onSubmit={this.goToStore}>
        {/*creating the store*/}
          <h2>Please Enter a Store</h2>
          <input type='text' ref='storeId' defaultValue={helpers.getFunName()} required/>
          <input type='Submit'/>
        </form>
      )
  }
});


var NotFound = React.createClass({

  render : function() {
    return (
      <p> 404 not found</p>
    )
  }
});

/*
Routes
*/

var routes = (
  <Router history={browserHistory} >
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDOM.render(routes, document.getElementById('app'));
