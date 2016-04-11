import AltContainer from 'alt-container';
import React from 'react';
import {DragSource, DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
import ProductActions from '../actions/ProductActions';
import Items from './Items.jsx';
import ItemActions from '../actions/ItemActions';
import ItemStore from '../stores/ItemStore';

const productSource = {
  beginDrag(props) {
    return {
      id: props.id
    };
  },
  isDragging(props, monitor) {
    return props.id === monitor.getItem().id;
  }
};

const productTarget = {
  hover(targetProps, monitor) {
    const targetId = targetProps.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    if (sourceId !== targetId) {
      targetProps.onMove({sourceId, targetId});
    }
  }
};

@DragSource(ItemTypes.PRODUCT, productSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging() // map isDragging() state to isDragging prop
}))
@DropTarget(ItemTypes.PRODUCT, productTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
export default class Product extends React.Component {
  render() {
    const {connectDragSource, connectDropTarget, isDragging,
      editing, product, ...props} = this.props;
    // Pass through if we are editing
    // debugger;
    const dragSource = editing ? a => a : connectDragSource;
    return dragSource(connectDropTarget(
      <div className="product" style={{
        opacity: isDragging ? 0 : 1
      }} {...props}>
        <AltContainer
          stores={[ItemStore]}
          inject={{
            items: () => ItemStore.getItemsByIds(product.items)
          }}
        >
          <Items
            onValueClick={this.activateItemEdit.bind(null, product.id)}
            onEdit={this.editItem.bind(null, product.id)} />
        </AltContainer>
        <span className="product-delete">
          <button onClick={this.props.onDelete}>x</button>
        </span>
      </div>
    ));
  }
  editItem(productId, id, value) {
    // Don't modify if trying to set an empty value
    if (!value.trim()) {
      ItemActions.update({id, editing: false});
      return;
    }
    ProductActions.update({id: productId, editing: false});
    ItemActions.update({id, value, editing: false});
  }
  activateItemEdit(productId, id) {
    ProductActions.update({id: productId, editing: true});
    ItemActions.update({id, editing: true});
  }
}
