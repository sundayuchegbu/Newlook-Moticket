import React from 'react';
import Banner from '../components/Banner';
import Category from './Category';
import WeekCategory from './WeekCategory';
import HomeBanner from '../constants/HomeBanner';
import Card2 from '../components/Card2';

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Category />
      {/* <WeekCategory /> */}
      <Card2 />
    </div>
  );
};

export default Home;
