import uuid from 'node-uuid';
import alt from '../libs/alt';
import LaneActions from '../actions/LaneActions';


class LaneStore {
  constructor() {
    this.bindActions(LaneActions);

    this.lanes = [];
  }

  create(lane) {
    const lanes = this.lanes;

    lane.id = uuid.v4();
    lane.items = lane.items || [];

    this.setState({
      lanes: lanes.concat(lane)
    });
  }

  update(updatedLane) {
    const lanes = this.lanes.map(lane => {
      if(lane.id === updatedLane.id) {
        return Object.assign({}, lane, updatedLane);
      }

      return lane;
    });

    this.setState({lanes});
  }
  delete(id) {
    this.setState({
      lanes: this.lanes.filter(lane => lane.id !== id)
    });
  }

  attachToLane({laneId, itemId}) {
    const lanes = this.lanes.map(lane => {
      if(lane.id === laneId) {
        if(lane.items.includes(itemId)) {
          console.warn('This is already attached', lanes);
      }
        else {
          lane.items.push(itemId);
        }
     }
      return lane;
    });
    this.setState({lanes});
  }

  detachFromLane({laneId, itemId}) {
    const lanes = this.lanes.map(lane => {
      if(lane.id === laneId) {
        lane.items = lane.items.filter(item => item !== itemId)
      }

      return lane;
    });
    this.setState({lanes});
  }
}

export default alt.createStore(LaneStore, 'LaneStore');