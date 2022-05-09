import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import person1 from '../../../assets/images/people1.png'
import person2 from '../../../assets/images/people2.png'
import person3 from '../../../assets/images/people3.png'
import Review from './Review';
const Testimonials = () => {
  const reviews = [
    {
      '_id': 1,
      'name': 'Jhohn Dylan',
      'comment': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse dicta in quis commodi, labore voluptatum quaerat iure quo sint saepe?',
      'avatar': person1,
      'location': 'California'
    },
    {
      '_id': 2,
      'name': 'Micheal Sanders',
      'comment': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse dicta in quis commodi, labore voluptatum quaerat iure quo sint saepe?',
      'avatar': person2,
      'location': 'New York'
    },
    {
      '_id': 3,
      'name': 'Bob Mars',
      'comment': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse dicta in quis commodi, labore voluptatum quaerat iure quo sint saepe?',
      'avatar': person3,
      'location': 'Texas'
    }
  ]
  return (
    <div className='mt-28'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-xl font-bold text-primary'>Testimonials</h1>
          <h1 className='text-5xl font-normal'>What Our Patients Says</h1>
        </div>
        <div>
          <img className='w-28 lg:w-48' src={quote} alt="" />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {
          reviews.map(review => <Review
            key={review._id}
            review={review}
          ></Review>)
        }
      </div>
    </div>
  );
};

export default Testimonials;