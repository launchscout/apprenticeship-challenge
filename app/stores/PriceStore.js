import uuid from 'node-uuid';
import alt from '../libs/alt';
import PriceActions from '../actions/PriceActions';

class PriceStore {
  constructor() {
    this.bindActions(PriceActions);

    this.prices = [];

    this.exportPublicMethods({
      getPricesByIds: this.getPricesByIds.bind(this)
    });
  }

  create(price) {
    const prices = this.prices;

      price.id = uuid.v4();

      this.setState({
        prices: prices.concat(price)
    });
      return price;
  }

  update(updatedPrice) {
    const prices = this.prices.map(price => {
      if(price.id === updatedPrice.id) {

        return Object.assign({}, price, updatedPrice);
      }

      return price;
    });

    this.setState({prices});

  }
  delete(id) {
    this.setState({
      prices: this.prices.filter(price => price.id !== id)
    });
  }

  getPricesByIds(ids) {

    return (ids || []).map(
      id => this.prices.filter(price => price.id === id)
    ).filter(a => a.length).map(a => a[0]);
  }
}

export default alt.createStore(PriceStore, 'PriceStore');