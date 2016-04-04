import AltContainer from 'alt-container';
import React from 'react';
import Categories from './Categories.jsx';
import CategoryActions from '../actions/CategoryActions';
import CategoryStore from '../stores/CategoryStore';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)

export default class App extends React.Component {

  render() {

    return (
      <div>
        <h1 className="shopping-title">Things to Buy</h1>
        

        <AltContainer
          stores={[CategoryStore]}
          inject={{
            categories: () => CategoryStore.getState().categories || []
          }}
        >
        <Categories />
        </AltContainer>
        <div className="add-cat-container"><button className="add-category" onClick={this.addCategory}>+ Add category</button></div>
      </div>
    );
  }
  
  addCategory() {
    CategoryActions.create({name: 'New category'})
  }
}












