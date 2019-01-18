import React, { Component } from 'react';

let filtredArr = []

class Filter extends Component {

  getStopWords = () => {
    const {stopWordsList} = this.props;
    const {incomingMsgList} = this.props;
    const {setFormattedMsgList} = this.props;

    stopWordsList.map( (value) => {
      if (filtredArr.length == 0 ) {
        incomingMsgList.map(val => {
          filtredArr.push(val.text.toLowerCase().replace(value, '***'));
        })
      } else {
        let newFiltredArr = filtredArr.map(val => {
          return val.replace(value, '***');
        });
        filtredArr = newFiltredArr;
      }
    });
    return setFormattedMsgList(filtredArr);
  }

  render() {
    return (
      <div className='filter'>
        <button type='button' onClick={this.getStopWords}>filter</button>
      </div>
    )
  };
};

export default Filter;