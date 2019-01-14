import React from 'react';

let filtredArr = []
// переписать !
const Filter = ({
  incomingMsgList,
  stopWordsList,
  setFormattedMsgList
}) => {
  const getStopWords = () => {

    stopWordsList.map( (value) => {
      if (filtredArr.length == 0 ) {
        incomingMsgList.map(val => {
          filtredArr.push(val.text.toLowerCase().replace(value, '***'));
        })
      } else {
        let a = filtredArr.map(val => {
          return val.replace(value, '***');
        });
        filtredArr = a;
      }
    });
    return setFormattedMsgList(filtredArr);
  }

  return (
    <div className='filter'>
      <button type='button' onClick={getStopWords}>filter</button>
    </div>
  );
}

export default Filter;