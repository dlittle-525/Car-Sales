import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
  const [price, additionalPrice] = useSelector(state => [state.car.price, state.additionalPrice])
  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
};

export default Total;
