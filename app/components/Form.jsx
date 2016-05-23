import React from 'react';
import _ from 'underscore';

var Form = React.createClass({
  update(key, event) {
    this.props.update(key, event.target.value)
  },

  render () {
    var allFields = Object.keys(this.props.row),
        ommittedFields = this.props.hideFields,
        fields = _.difference(allFields, ommittedFields);

    return (
      <form onSubmit={this.props.addItem}>
        {fields.map(key =>
          <input
            type="text"
            key={key}
            placeholder={key}
            onChange={this.update.bind(this, key)} />)
        }
        <button className="button">+</button>
      </form>
    );
  }
});

export default Form;