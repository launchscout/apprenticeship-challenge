var React = require('react');

//creating ListItem here...defining the ListItem Class....
//items inside the curly brackets is JS...this.props.text is js expression where props is an object for properties and text the key...here we are assuming that there will be properties and one will be text
//...inside the () is the jsx which is js + html.
var ListItem = React.createClass({

    onClick: function(e) {
        e.stopPropagation();
        //  var removeItems = this.state.items;

        //  removeItems.splice(this.state.items);

    },


    render: function() {


        return (
            <li>
                <h4>{this.props.text}</h4>
                <button className="destroy" onClick={this.onClick}>Remove</button>

            </li>


        );
    }
});

module.exports = ListItem;
