import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AppointmentSchedules from './AppointmentSchedules';

const Appointments = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}
      />
      <AppointmentSchedules date={date}
      />
    </div>
  );
};

export default Appointments;