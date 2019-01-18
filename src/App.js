import React, { Component } from 'react';
import './App.css';
import incomingMsgList from './JSON_1.json';
import stopWordsList from './JSON_2.json';
import Form from './components/Form.js';
import Filter from './components/Filter.js';

// let newStopWordsList = [...stopWordsList];

class App extends Component {
  state = {
    incomingMsgList,
    stopWordsList,
    formattedMsgList: [],
  };

  // addStopWordsList = (value) => {
  //   if ( !value.length == 0 ) {
  //     newStopWordsList.push(value.toLowerCase());
  //     this.setState({ stopWordsList: newStopWordsList });
  //   } else {
  //     console.log('input is empty');
  //   }
  // }

  addStopWordsList = (value) => {
    if ( value.length ) {
      this.setState({ stopWordsList: [ ...this.state.stopWordsList, value.toLowerCase() ] });
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
    return formattedMsgList.map((value, index) => {
      return < p key = { index } > { value.charAt(0).toUpperCase() + value.slice(1) } < /p>
    });
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