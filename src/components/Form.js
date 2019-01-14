import React, { Component } from 'react';

class Form extends Component {
  state = {value: ''};

  onMessageChange = (event) => {
    this.setState({value: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addStopWordsList(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.value} onChange={this.onMessageChange} placeholder="Write a message..."/>
        <button type="submit" value="Submit">send</button>
      </form>
    );
  }
}

export default Form;