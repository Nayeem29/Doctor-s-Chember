import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
import PrimaryBtn from '../../Shared/PrimaryBtn';

const HomeAppointment = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${appointment})`
      }}
      className='flex items-center justify-center mt-48'>
      <div className='flex-1'>
        <img className='mt-[-130px]' src={doctor} alt="" />
      </div>
      <div className='flex-1 mr-36'>
        <h1 className='text-primary mb-5 text-xl font-bold'>Appointment</h1>
        <p className='text-white mb-5 text-4xl font-semibold'>Make an Appointment Today</p>
        <p className='text-white my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed corrupti et animi deleniti quasi minima quas porro ratione expedita molestias consequatur fugit odio, sequi culpa accusantium? Aspernatur, fugit quidem?</p>
        <PrimaryBtn className='mt-5'>GetStarted</PrimaryBtn>
      </div>
    </section>
  );
};

export default HomeAppointment;