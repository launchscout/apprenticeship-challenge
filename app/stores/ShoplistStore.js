import uuid from 'node-uuid';
import alt from '../libs/alt';
import ShoplistActions from '../actions/ShoplistActions';
import ProductActions from '../actions/ProductActions';
import update from 'react-addons-update';
import Firebase from 'firebase';

class ShoplistStore {
  constructor() {
    this.bindActions(ShoplistActions);
    this.shoplists = [];
    var temp = new Firebase('https://stamates-shopping.firebaseio.com/shoplists');
    temp.once("value", function(snapshot) {
      var items = [];
      snapshot.forEach(function(data){
        items.push(data.val());
      }.bind(this));
      this.setState({ shoplists: items });
    }.bind(this));
  }
  create(shoplist) {
    const shoplists = this.shoplists;
    shoplist.id = uuid.v4();
    shoplist.products = shoplist.products || [];
    this.setState({
      shoplists: shoplists.concat(shoplist)
    });
    this.firebaseRef = new Firebase('https://stamates-shopping.firebaseio.com/shoplists');
    this.firebaseRef.push(shoplist);
  }
  update(updatedShoplist) {
    const shoplists = this.shoplists.map(shoplist => {
      if (shoplist.id === updatedShoplist.id) {
        return Object.assign({}, shoplist, updatedShoplist);
      }
      return shoplist;
    });
    this.setState({shoplists});
    this.firebaseRef = new Firebase('https://stamates-shopping.firebaseio.com/shoplists');
    // TODO use update instead of set so key structure of database is maintained instead of rewrites
    // this.firebaseRef.orderByChild("id").equalTo(updatedShoplist.id).on("value", function(snapshot) {
		// 	snapshot.forEach(function(data) {
    //     // var record = data.val();
    //     this.firebaseRef.child(data.key()).update(updatedShoplist);
    //   }.bind(this));
    // }.bind(this));
    this.firebaseRef.set(shoplists);
  }
  // delete(id) {
  //   this.setState({
  //     shoplists: this.shoplists.filter(shoplist => shoplist.id !== id)
  //   });
  // }
  delete(id) {
    // TODO remove products associated with shopping list
    // debugger;
    // var delShoplist = this.shoplists.filter(shoplist => shoplist.id === id)
    // var invalidProducts = [];
    // for (var key in delShoplist[0]) {
    //   if (delShoplist[0].hasOwnProperty(key)) {
    //     if (key == "products") {
    //       for (var i=0; i < delShoplist[0][key].length; i++) {
    //         invalidProducts.push(delShoplist[0][key][i])
    //       }
    //     }
    //   }
    // }
    // for (var j=0; j < invalidProducts.length; j++) {
    //   ProductActions.delete(invalidProducts[i]);
    // }
    var validShoplists = this.shoplists.filter(shoplist => shoplist.id !== id)
    this.setState({
      shoplists: validShoplists
    });
    this.firebaseRef = new Firebase('https://stamates-shopping.firebaseio.com/shoplists');
    this.firebaseRef.set(validShoplists);
  }
  attachToShoplist({shoplistId, productId}) {
    const shoplists = this.shoplists.map(shoplist => {
      if (shoplist.products.includes(productId)) {
        shoplist.products = shoplist.products.filter(product => product !== productId);
      }
      if (shoplist.id === shoplistId) {
        if (shoplist.products.includes(productId)) {
          console.warn('Already attached product to shoplist', shoplists);
        } else {
          shoplist.products.push(productId);
        }
      }
      return shoplist;
    });
    this.setState({shoplists});
    this.firebaseRef = new Firebase('https://stamates-shopping.firebaseio.com/shoplists');
    // debugger;
    // this.firebaseRef.update(shoplistId);
    this.firebaseRef.set(shoplists);
  }
  detachFromShoplist({shoplistId, productId}) {
    const shoplists = this.shoplists.map(shoplist => {
      if (shoplist.id === shoplistId) {
        shoplist.products = shoplist.products.filter(product => product !== productId);
      }
      return shoplist;
    });
    this.setState({shoplists});
    this.firebaseRef = new Firebase('https://stamates-shopping.firebaseio.com/shoplists');
    this.firebaseRef.set(shoplists);
  }

  move({sourceId, targetId}) {
    const shoplists = this.shoplists;
    const sourceShoplist = shoplists.filter(shoplist => shoplist.products.includes(sourceId))[0];
    const targetShoplist = shoplists.filter(shoplist => shoplist.products.includes(targetId))[0];
    const sourceProductIndex = sourceShoplist.products.indexOf(sourceId);
    const targetProductIndex = targetShoplist.products.indexOf(targetId);
    if (sourceShoplist === targetShoplist) {
      // move at once to avoid complications
      sourceShoplist.products = update(sourceShoplist.products, {
        $splice: [
          [sourceProductIndex, 1],
          [targetProductIndex, 0, sourceId]
        ]
      });
    } else {
      // get rid of the source
      sourceShoplist.products.splice(sourceProductIndex, 1);
      // and move it to target
      targetShoplist.products.splice(targetProductIndex, 0, sourceId);
    }
    this.setState({shoplists});
    this.firebaseRef = new Firebase('https://stamates-shopping.firebaseio.com/shoplists');
    this.firebaseRef.set(shoplists);
  }
}

export default alt.createStore(ShoplistStore, 'ShoplistStore');
