import React from 'react';

const Counter = ({count}) => {
  return (
    <div className='compteur'>
      <p>Nombre de coups : {count}</p>
    </div>
  )
};

export default Counter;
