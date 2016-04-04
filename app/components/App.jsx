import AltContainer from 'alt-container';
import React from 'react';
import Shoplists from './Shoplists.jsx';
import ShoplistActions from '../actions/ShoplistActions';
import ShoplistStore from '../stores/ShoplistStore';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
export default class App extends React.Component {
  render() {
    return (
      <div>
        <button className="add-Shoplist" onClick={this.addShoplist}>+</button>
        <AltContainer
          stores={[ShoplistStore]}
          inject={{
            shoplists: () => ShoplistStore.getState().shoplists || []
          }}
          >
          <Shoplists onDelete={this.deleteShoplist} />
        </AltContainer>
      </div>
    );
  }

  deleteShoplist(id, e) {
    e.stopPropagation();
    ShoplistActions.delete(id);
  }

  addShoplist() {
    ShoplistActions.create({name: 'New list', editing: true});
  }
}
