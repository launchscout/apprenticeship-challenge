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
    lane.prices = lane.prices || [];
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

  attachToLane({laneId, itemId, priceId}) {
    const lanes = this.lanes.map(lane => {
      if(lane.id === laneId && itemId) {
        if(lane.items.includes(itemId)) {
          console.warn('Already attached item to lane', lanes);
        }
        else {
          lane.items.push(itemId);
        }
      } else if (lane.id === laneId && priceId) {
        if(lane.items.includes(priceId)) {
          console.warn('Price already attached item to lane', lanes);
        }
        else {
          lane.prices.push(priceId);
        }
      }
      return lane;
    });

    this.setState({lanes});
  }

  detachFromLane({laneId, itemId, priceId}) {
    const lanes = this.lanes.map(lane => {
      if(lane.id === laneId) {
        lane.items = lane.items.filter(item => item !== itemId);
        // lane.prices = lane.prices.filter(price => price !== priceId);
      }

      return lane;
    });

    this.setState({lanes});
  }


}

export default alt.createStore(LaneStore, 'LaneStore');