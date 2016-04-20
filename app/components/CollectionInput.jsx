import React from 'react';
import Card from 'material-ui/lib/card/card';
import RaisedButton from 'material-ui/lib/raised-button';
import Firebase from 'firebase';

export default class GListInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
    this.firebaseRef = new Firebase('https://gaslightchallenge.firebaseio.com');
  }

  onChange(e){
    this.setState({
      title: e.target.value
    });
  }

  onKeyUp(e){
    if(e.keyCode === 13 && e.target.value != ''){
      e.preventDefault();

      this.firebaseRef.push({
        name: this.state.title
      });

      this.setState({
        title: ''
      });
    }
  }

  render(){
    return (
      <Card>
        <input
          value={this.state.title}
          onChange={this.onChange.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
          placeholder='New List Name'/>
      </Card>
    )
  }
}
