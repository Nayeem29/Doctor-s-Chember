import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>{review.comment}</p>
      </div>
      <div className='flex items-center mx-5 my-2'>
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ml-3">
            <img src={review.avatar} alt='' />
          </div>
        </div>
        <div className='font-medium text-normal ml-5'>
          <p>{review.name}</p>
          <p className='text-sm'>{review.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;