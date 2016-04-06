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

    return (
      <div>
        <button className="add-lane" onClick={this.addLane}>Creat List</button>

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

}