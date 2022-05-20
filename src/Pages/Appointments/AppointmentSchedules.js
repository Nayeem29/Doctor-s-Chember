import React, { useState } from 'react';
import { format } from 'date-fns';
import ApointmentService from './ApointmentService';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const AppointmentSchedules = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, 'PP');

  const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>
    fetch(`https://stormy-plateau-40538.herokuapp.com/available?date=${formattedDate}`)
      .then(res => res.json())
  )
  if (isLoading) {
    return <Loading />
  }
  // useEffect(() => {
  //   fetch(`https://stormy-plateau-40538.herokuapp.com/available?date=${formattedDate}`)
  //     .then(res => res.json())
  //     .then(data => setServices(data));
  // }, [formattedDate])
  return (
    <div>
      {
        date &&
        <p className='text-secondary font-bold text-center'>Available Appoinments on: {format(date, 'PP')}.</p>
      }
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          services?.map(service =>
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
            refetch={refetch}
          ></BookingModal>
        }
      </div>
    </div>
  );
};

export default AppointmentSchedules;