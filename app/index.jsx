import './css/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Navigation } from 'react-router';
import { browserHistory } from 'react-router'; //loads code to do push state
import helpers from './helpers';
import Catalyst from 'react-catalyst';

// Firebase
import Rebase from 're-base';
var base = Rebase.createClass('https://shining-heat-8806.firebaseio.com/');



var App = React.createClass({
  mixins: [Catalyst.LinkedStateMixin],
  //react lifescycle. Before anything populates, what is it's initial state:
  getInitialState : function() {
    return {
      fishes : {},
      order : {}
    }
  },
  componentDidMount : function() {
    base.syncState(this.props.params.storeId + '/fishes', {
      context : this,
      state : 'fishes'
    }); // takes your state in React and synce with Firebase

    var localStorageRef = localStorage.getItem('order-' + this.props.
      params.storeId);

      if(localStorage) {
        this.setState ({
          order : JSON.parse(localStorageRef)
        });
      }

  },
  componentWillUpdate : function(nextProps, nextState) {
    localStorage.setItem('order-' + this.props.params.storeId, JSON.stringify(nextState.order));
  },
  addToOrder : function(key) {
    this.state.order[key] = this.state.order[key] + 1 || 1; //neat logic trick that avoids having to write is statements
    //if the above exists, simply add 1. If if doesn't, make the value to be one
    this.setState({ order : this.state.order }); //remember: state does not PASS until it says setState
  },
  addFish : function(fish) {
    var timestamp = (new Date()).getTime();
    //update state object
    this.state.fishes['fish-' + timestamp] = fish;
    //set the state
    this.setState({ fishes : this.state.fishes });
  },
  loadSamples : function() {
    this.setState({
      fishes : require('./sample-fishes')
    });
  },
  renderFish : function(key) {
    return <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
  },
  render : function() {
      return (
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Seafood Market" />
              <ul className="list-of-fishes">
                {Object.keys(this.state.fishes).map(this.renderFish)}
              </ul>
          </div>
            <Order fishes={this.state.fishes} order={this.state.order}/>
            {/*to have access to addFish, we must travel across methods/components*/}
            <Inventory addFish={this.addFish} loadSamples={this.loadSamples} fishes={this.state.fishes} linkState={this.linkState}/>
        </div>
      )
  }

});

var Fish = React.createClass({
  onButtonClick : function() {
    // console.log('Going to add the first:', this.props.index);
    var key = this.props.index;
    this.props.addToOrder(key);
  },
  render : function() {
    var details = this.props.details;
    var isAvailable = (details.status == 'available' ? true : false);
    var buttonText = (isAvailable? 'Add To Order' : 'Sold Out');
    return (
      <li className="menu-fish">
        <img src={this.props.details.image} alt={details.name}></img>
        <h3 className="fish-name">
          {details.name}
          <span className="price">{helpers.formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button disable={!isAvailable} onClick={this.onButtonClick}>{buttonText}</button>
      </li>
    )
  }
});

var AddFishForm = React.createClass({
  createFish : function(event) {
    // 1. stop the form from submitting defaultly
    event.preventDefault();
    // 2. Take the data from the form and create an object
    var fish = {
      name : this.refs.name.value,
      price : this.refs.status.value,
      status : this.refs.status.value,
      desc : this.refs.desc.value,
      image : this.refs.image.value
    }
    // 3. add the fish to the app state
    this.props.addFish(fish);
    this.refs.fishForm.reset();
  },
  render : function() {
    return (
      <form className="fish-edit" ref="fishForm" onSubmit={this.createFish}>
        <input type="text" ref="name" placeholder="Fish Name" ></input>
        <input type="text" ref="price" placeholder="Fish Price" ></input>
        <select ref="status">
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" ref="desc" placeholder="Desc"></textarea>
        <input type="text" ref="image" placeholder="URL to Image" />
        <button type="submit">Add Item</button>
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
  renderOrder : function(key) {
    var fish = this.props.fishes[key];
    var count = this.props.order[key]; //dynamic data is usually in brackets

    if(!fish) {
      return <li key={key}> Sorry, fish no longer available!</li>
    }

    return (
      <li key={key}>
        <span>{count}</span>lbs
        {fish.name}
        <span className="price">{helpers.formatPrice(count * fish.price)}</span>
      </li>
    )
  },
  render : function() {
    var orderIds = Object.keys(this.props.order);

    var total = orderIds.reduce((prevTotal, key) => {
      var fish = this.props.fishes[key];
      var count = this.props.order[key];
      var isAvailable = fish && fish.status === 'available';

      if (fish && isAvailable) {
        return prevTotal + (count * parseInt(fish.price) || 0);
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2 className="order-title">Your Order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
            {helpers.formatPrice(total)}
          </li>
        </ul>
      </div>
    )
  }
});

var Inventory = React.createClass({
  renderInventory : function(key) {
    var linkState = this.props.linkState;
    return (
      <div className="fish-edit" key={key}>
        <input type="text" valueLink={linkState('fishes.'+key+'.name')}></input>
        <input type="text" valueLink={linkState('fishes.'+key+'.price')}></input>
        <select valueLink={linkState('fishes.'+key+'.status')}>
          <option value="unavailable">Sold Out!</option>
          <option value="available">Fresh!</option>
        </select>
        <textarea valueLink={linkState('fishes.'+key+'.desc')}></textarea>
        <input type="text" valueLink={linkState('fishes.'+key+'.image')}></input>
        <button>Remove Fish</button>
      </div>
    )
  },

  render : function() {
    return (
      <div>
      <h2>Inventory!</h2>
      {Object.keys(this.props.fishes).map(this.renderInventory)}
      {/*to have access to addFish, we must travel across methods/components*/}
      <AddFishForm {...this.props}/>
      {/*... this spread adds all of the props from the current component to child components*/}
      <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
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
