import React, { Component } from 'react';
import './App.css';
import json1 from './JSON_1.json';
import json2 from './JSON_2.json';
import Form from './components/Form.js';
import Filter from './components/Filter.js';

const incomingMsg = json1.map((value, index) => <p key = {index}>{value.text}</p>);
const incomingMsgList = json1.map((value) => value);
const stopWordsList = json2.map((value) => value);

class App extends Component {
  state = {arr: []};

  updateData = (value) => {
    this.setState({ value })
  }

  updateArr = (arr) => {
    this.setState({ arr })
  }

  stopWordsListFunc = (value) => {
    if (value !== undefined) {
      stopWordsList.push(value);
    } 
    return stopWordsList.map((value, index) => <p key = {index}>{value}</p>);
  }
  
  mapArrToP = (val) => {
    return val.map((value, index) => <p key = {index}>{value}</p>);
  }

  render() {
    return (
      <div className="App">
        <div className="incoming">{incomingMsg}</div>
        <div className="stopWords">{this.stopWordsListFunc(this.state.value)}</div>
        <div className="outgoing">{this.mapArrToP(this.state.arr)}</div>
        <Form updateData={this.updateData} />
        <Filter stopWordsList={stopWordsList} incomingMsgList={incomingMsgList} updateArr={this.updateArr}/>
      </div>
    );
  }
}

export default App;
