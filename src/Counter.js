import React from 'react';

const Counter = ({count}) => {
  return (
    <div className='compteur'>
      <p><span className='nb-coups'>Compteur :</span> </p>
      <p><span className='counter-color'>{count}</span></p>
    </div>
  )
};

export default Counter;
