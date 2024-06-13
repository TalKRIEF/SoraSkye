import React from 'react';

const Counter = ({count}) => {
  return (
    <div className='compteur'>
      <p>Nombre de coups : <span className='counter-color'>{count}</span></p>
    </div>
  )
};

export default Counter;
