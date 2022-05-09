import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import HomeAppointment from './HomeAppointment';
import Info from './Info/Info';
import Testimonials from './Reviews/Testimonials';
import Services from './Services/Services';

const Home = () => {
  return (
    <div className='mx-12'>
      <Banner />
      <Info />
      <Services />
      <HomeAppointment className='w-full' />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;