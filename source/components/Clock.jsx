var React = require('react');

var Clock = React.createClass({
    getInitialState: function() {
      return {hours: '', minutes: '', seconds: ''};
    },

    tick: function() {
      var now = new Date();
      var h = now.getHours();
      var m = ('0' + now.getMinutes()).slice(-2);
      var s = ('0' + now.getSeconds()).slice(-2);
      var meridiem = "am"
      if (h >= 12) {
        meridiem = "pm"
      }

      this.setState({hours: h, minutes: m, seconds: s, day: meridiem});
    },

    componentDidMount: function() {
      this.interval = setInterval(this.tick, 1000);
    },

    componentWillUnmount: function() {
      clearInterval(this.interval);
    },

    render: function() {

      var navStyle = {
        marginTop: 15
      }

      return (
          <div style={navStyle}>
              <h4>{this.state.hours}:{this.state.minutes}:{this.state.seconds}{this.state.day}</h4>
          </div>

      );
    }

});

module.exports = Clock;
