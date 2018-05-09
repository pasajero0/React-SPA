import React from 'react';

const Filter = ({
  incomingMsgList,
  stopWordsList,
  setFormattedMsgList
}) => {
  const getStopWords = () => {
    // console.log('filter incomingMsg ',this.props.incomingMsgList);
    // console.log('filter stopWords ', this.props.stopWordsList);

    const stopWords = incomingMsgList.map((value, index) => value.text.toLowerCase().replace(stopWordsList[index], '***') );
      // console.log('filter stopWords join ', stopWordsList.join(' '));

    return setFormattedMsgList(stopWords);
  }

  return (
    <div className='filter'>
      <button type='button' onClick={getStopWords}>filter</button>
    </div>
  );
}

export default Filter;