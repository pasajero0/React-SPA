import React, { Component } from 'react';
import './App.css';
import incomingMsgList from './JSON_1.json';
import stopWordsList from './JSON_2.json';
import Form from './components/Form.js';
import Filter from './components/Filter.js';

{/*const incomingMsg = json1.map((value, index) => <p key = {index}>{value.text}</p>);*/}
// const incomingMsgList = json1.map((value) => value);
// const stopWordsList = json2.map((value) => value);

class App extends Component {
  state = {
  	incomingMsgList,
  	stopWordsList,
  	formattedMsgList: [],
  };

  addStopWordsList = (value) => this.setState({ stopWordsList: [...stopWordsList, value] });

  setFormattedMsgList = (formattedMsgList) => this.setState({ formattedMsgList });

  stopWordsListFunc = () => {
  	const { stopWordsList } = this.state;
    return stopWordsList.map((value, index) => <p key={index}>{value}</p>);
  }
  
  getFormattedMsg = (val) => {
  	const { formattedMsgList } = this.state;
    return formattedMsgList.map((value, index) => <p key={index}>{value}</p>);
  }

  getIncomingMsg = () => {
  	const { incomingMsgList } = this.state;
  	return incomingMsgList.map((value, index) => <p key={index}>{value.text}</p>)
  }

  render() {
    return (
      <div className="App">
        <div className="incoming">{this.getIncomingMsg()}</div>
        <div className="stopWords">{this.stopWordsListFunc()}</div>
        <div className="outgoing">{this.getFormattedMsg()}</div>
        <Form addStopWordsList={this.addStopWordsList} />
        <Filter
        	stopWordsList={this.state.stopWordsList}
        	incomingMsgList={this.state.incomingMsgList}
        	setFormattedMsgList={this.setFormattedMsgList}
		/>
      </div>
    );
  }
}

export default App;
