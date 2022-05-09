import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5'>
      <InfoCard img={clock} tittle='Opening Hours' bgColor='bg-gradient-to-r from-secondary to-primary' />
      <InfoCard img={marker} tittle='Our Location' bgColor='bg-accent' />
      <InfoCard img={phone} tittle='Contact Us' bgColor='bg-gradient-to-r from-secondary to-primary' />
    </div>
  );
};

export default Info;