import AltContainer from 'alt-container';

import React from 'react';
// import Items from './Items.jsx';
// import ItemActions from '../actions/ItemActions';
// import ItemStore from '../stores/ItemStore';


import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';

import Prices from './Prices.jsx';
import PriceActions from '../actions/PriceActions';
import PriceStore from '../stores/PriceStore';


export default class App extends React.Component {

  render() {
    // localStorage.clear()
    return (
      <div>
        <button className="add-lane" onClick={this.addLane}>+</button>
        <button onClick={function() {localStorage.clear(); location.reload()}}>dump</button>


         <AltContainer
          stores={[LaneStore]}
          inject={{
            lanes: () => LaneStore.getState().lanes || []
          }}
        >
          <Lanes />
        </AltContainer>

      </div>
    );
  }

 addLane() {
    LaneActions.create({name: 'New List'});
  }

 //  deletePrice = (id, e) => {
 //    // Avoid bubbling to edit
 //    e.stopPropagation();

 //    PriceActions.delete(id);
 //  }

 //  addPrice = () => {
 //   PriceActions.create({amount: '$0.00'});
 //  }

 //  editPrice = (id, amount) => {
 //    // Don't modify if trying set an empty value
 //    if(!amount.trim()) {
 //      return;
 //    }

 //    PriceActions.update({id, amount});
 //  }

}