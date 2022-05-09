import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import flouride from '../../../assets/images/fluoride.png'
import teeth from '../../../assets/images/whitening.png';
import Service from './Service';
import Treatment from './Treatment';

const Services = () => {
  const services = [
    {
      '_id': 1,
      'name': 'Flouride Treatment',
      'img': flouride
    },
    {
      '_id': 2,
      'name': 'Cavity Filling',
      'img': cavity
    },
    {
      '_id': 3,
      'name': 'Teeth Whitening',
      'img': teeth
    },
  ]
  return (
    <div>
      <div className='my-24 text-center'>
        <h1 className='font-bold text-xl text-primary'>Our Services</h1>
        <p className='font-semibold text-3xl'>Services We Provide</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          services.map(service => <Service
            key={service._id}
            service={service}
          />)
        }
      </div>
      <div className='mt-36'>
        <Treatment />
      </div>
    </div>
  );
};

export default Services;