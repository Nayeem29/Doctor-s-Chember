import React, { useState } from 'react';
import { format } from 'date-fns';
import ApointmentService from './ApointmentService';
import BookingModal from './BookingModal';

const AppointmentSchedules = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data));
  return (
    <div>
      {
        date &&
        <p className='text-secondary font-bold text-center'>Available Appoinments on: {format(date, 'PP')}.</p>
      }
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          services.map(service =>
            <ApointmentService
              key={service._id}
              service={service}
              setTreatment={setTreatment}
            />)
        }
        {
          treatment && <BookingModal
            date={date}
            treatment={treatment}
            setTreatment={setTreatment}
          ></BookingModal>
        }
      </div>
    </div>
  );
};

export default AppointmentSchedules;