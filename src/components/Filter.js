import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {arr: []};
  }

  getStopWords = () => {
    // console.log('filter incomingMsg ',this.props.incomingMsgList);
    // console.log('filter stopWords ', this.props.stopWordsList);

    const a = this.props.incomingMsgList.map((value) => {
      const b = (this.props.stopWordsList.length)-1;
      const c = value.text.toLowerCase().replace(this.props.stopWordsList[b], '***');
      console.log('filter stopWords join ', this.props.stopWordsList.join(' '));

      return c;
    });
      
 
    return this.props.updateArr(a);
  }

  render() {
    return (
      <div className='filter'>
        <button type='button' onClick={this.getStopWords}>filter</button>
      </div>
    );
  }
}

export default Filter;