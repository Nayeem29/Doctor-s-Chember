import React from 'react';
import treatmentImg from '../../../assets/images/treatment.png';

const Treatment = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={treatmentImg} className="max-w-sm ml-40 rounded-lg shadow-2xl" alt='' />
        <div className='ml-28 mr-40'>
          <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;