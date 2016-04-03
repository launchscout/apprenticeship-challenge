import AltContainer from 'alt-container';
import React from 'react';
import Items from './Items.jsx';
import ItemActions from '../actions/ItemActions';
import ItemStore from '../stores/ItemStore';

export default class Lane extends React.Component {
  render() {
    const {lane, ...props} = this.props;

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
            items: () => ItemStore.getState().items || []
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
  }
  addItem() {
    ItemActions.create({name: 'New name'});
  }
  deleteItem(id, e) {
    e.stopPropagation();

    ItemActions.delete(id);
  }
}