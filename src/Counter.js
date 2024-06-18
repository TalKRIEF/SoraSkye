import React from 'react';

const Counter = ({count}) => {
  return (
    <div className='compteur'>
      <p><span className='nb-coups'>Nombre de coups :</span> <span className='counter-color'>{count}</span></p>
    </div>
  )
};

export default Counter;
