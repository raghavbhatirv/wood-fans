import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    const timeoutId = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <div className="flex items-center justify-center p-24">
      <div className="bg-opacity-75">
        <div className="flex flex-col items-center p-4 space-y-2 bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-4xl font-bold font-extrabold text-transparent bg-clip-text bg-primary-yellow">Order Placed !</h1>
          <p>Redirecting to Home in {count} seconds</p>
          </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
