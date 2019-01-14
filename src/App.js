import React, { Component } from 'react';
import './App.css';
import incomingMsgList from './JSON_1.json';
import stopWordsList from './JSON_2.json';
import Form from './components/Form.js';
import Filter from './components/Filter.js';

let newStopWordsList = [...stopWordsList];

class App extends Component {
  state = {
    incomingMsgList,
    stopWordsList,
    formattedMsgList: [],
  };

addStopWordsList = (value) => {
  // console.log(value)
  // console.log(value.length)
  if ( !value.length == 0 ) {
    newStopWordsList.push(value);
    this.setState({ stopWordsList: newStopWordsList });
  } else {
    console.log('input is empty');
  }
}


setFormattedMsgList = (formattedMsgList) => this.setState({ formattedMsgList });

stopWordsListFunc = () => {
  const { stopWordsList } = this.state;
  return stopWordsList.map((value, index) => < p key = { index } > { value } </p> );
}

getFormattedMsg = (val) => {
const { formattedMsgList } = this.state;
return formattedMsgList.map((value, index) => < p key = { index } > { value } < /p>);
}

getIncomingMsg = () => {
  const { incomingMsgList } = this.state;
  return incomingMsgList.map((value, index) => < p key = { index } > { value.text } </p>)
  }

  render() {
    return (
      <div className = "App" >
        <div className = "incoming" > { this.getIncomingMsg() } </div> 
        <div className = "stopWords" > { this.stopWordsListFunc() } </div> 
        <div className = "outgoing" > { this.getFormattedMsg() } </div> 
        <Form addStopWordsList = { this.addStopWordsList }/> 
        <Filter stopWordsList = { this.state.stopWordsList }
                incomingMsgList = { this.state.incomingMsgList }
                setFormattedMsgList = { this.setFormattedMsgList }
        /> 
      </div>
    );
  }
}

export default App;