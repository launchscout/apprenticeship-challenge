import AltContainer from 'alt-container';
import React from 'react';
import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';

export default class APP extends React.Component {

  render() {

    return (
      <div>
        <button className="add-lane" onClick={this.addLane}>
          + Create New List
        </button>

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