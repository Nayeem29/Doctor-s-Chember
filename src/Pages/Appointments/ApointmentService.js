import React from 'react';

const ApointmentService = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card bg-base-100 shadow-xl mx-10">
      <div className="card-body text-center">
        <h2 className="card-title mx-auto">{name}</h2>
        <p>
          {
            slots.length > 0 ? <span>{slots[0]}</span>
              : <span className='text-red-600'>Try Another date</span>
          }
        </p>
        <p>
          {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available
        </p>
        <div className="card-actions justify-end">
          <label
            htmlFor='booking-modal'
            className="btn modal-button btn-primary mx-auto"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
          >book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default ApointmentService;