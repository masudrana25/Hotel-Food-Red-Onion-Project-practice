import React from 'react';
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner';
import Breakfast from '../Breakfast/Breakfast';

const Home = () => {
  return (
    <div>
      <Lunch></Lunch>
      <Dinner></Dinner>
      <Breakfast></Breakfast>
    </div>
  );
};

export default Home;