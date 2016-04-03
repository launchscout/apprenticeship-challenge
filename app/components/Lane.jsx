import AltContainer from 'alt-container';
import React from 'react';
import Items from './Items.jsx';
import ItemActions from '../actions/ItemActions';
import ItemStore from '../stores/ItemStore';
import LaneActions from '../actions/LaneActions';


export default class Lane extends React.Component {
  render() {
    const {lane, ...props} = this.props;

  //   return (
  //     <div {...props}>
  //       <div className="lane-header">
  //         <div className="lane-add-item">
  //           <button onClick={this.addItem}>+</button>
  //         </div>
  //         <div className="lane-name">{lane.name}</div>
  //       </div>
  //       <AltContainer
  //         stores={[ItemStore]}
  //         inject={{
  //           items: () => ItemStore.getItemsByIds(lane.items)
  //         }}
  //       >
  //         <Items onEdit={this.editItem} onDelete={this.deleteItem} />
  //       </AltContainer>
  //     </div>
  //   );
  // }


    return (
      <div {...props}>
        <div className="lane-header">
          <div className="lane-add-item">
            <button onClick={this.addItem}>+</button>
          </div>
          <div className="lane-name">{lane.name}</div>
        </div>
        <AltContainer
          stores={[ItemStore]}
          inject={{

            items: () => ItemStore.getItemsByIds(lane.items)

          }}
        >
          <Items onEdit={this.editItem} onDelete={this.deleteItem} />
        </AltContainer>
      </div>
    );
  }

  editItem(id, name) {
    // Don't modify if trying set an empty value
    if(!name.trim()) {
      return;
    }

    ItemActions.update({id, name});
  };

  addItem = (e) => {
    const laneId = this.props.lane.id;
    const item = ItemActions.create({name: 'New task'});

    LaneActions.attachToLane({
      itemId: item.id,
      laneId
    });
  };

  deleteItem = (itemId, e) => {
    e.stopPropagation();

    const laneId = this.props.lane.id;

    LaneActions.detachFromLane({laneId, itemId});
    ItemActions.delete(itemId);
  };


  // addItem = (e) => {
  //   const laneId = this.props.lane.id;
  //   const item = ItemActions.create({name: 'New name'});

  //    LaneActions.attachToLane({
  //     itemId: item.id,
  //     laneId
  //   });
  // };
  //  deleteItem = (itemId, e) => {
  //   e.stopPropagation();

  //   const laneId = this.props.lane.id;

  //   LaneActions.detachFromLane({laneId, itemId});
  //   ItemActions.delete(noteId);
  // };
}