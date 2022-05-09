import React from 'react';
import PrimaryBtn from '../../Shared/PrimaryBtn';
import backGroundImg from '../../assets/images/appointment.png';

const ContactUs = () => {
  return (
    <div className='my-32 px-[350px] py-[70px]'
      style={{
        backgroundImage: `url(${backGroundImg})`
      }}
    >
      <h1 className='text-xl text-center my-5 font-bold text-primary'>Contact Us</h1>
      <p className='text-3xl text-center my-5 font-medium text-white'>Stay connected with us</p>
      <div className='flex items-center justify-center'>
        <form>
          <input className='my-3 py-2 px-3 w-full rounded-lg outline-none' type="email" name="email" id="" placeholder='Email' size='40' />
          <br />
          <input className='my-3 py-2 px-3 w-full rounded-lg outline-none' type="text" name="subject" id="" placeholder='Subject' size='40' />
          <br />
          <textarea className='my-3 py-2 px-3 w-full rounded-lg outline-none' name="message" id="" cols="30" rows="10" placeholder='Your Message' size='40'></textarea>
          <PrimaryBtn className='my-5 mx-auto block'>Submit</PrimaryBtn>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;