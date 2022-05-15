import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const { name, slots, _id } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, 'PP');
  const handleBooking = e => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patientEmail: user.email,
      patient: user.displayName,
      phone: e.target.mobile.value
    }
    console.log(booking);

    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          toast(`Appointment is set on ${formattedDate} at ${slot}`)
        } else {
          toast('Appointment is already taken!!');
        }
      })
    refetch();
    setTreatment(null);
    // e.target.reset();
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />

      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg">Booking for: {name}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-2 justify-items-center'>
            <input type="text" disabled value={format(date, 'PP')} className="input mt-2 w-full max-w-xs" />
            <select name='slot' className="select mt-2 w-full max-w-xs">
              {
                slots.map((slot, index) =>
                  <option
                    key={index} value={slot}>{slot}
                  </option>
                )
              }
            </select>
            <input type="email" name='email' disabled value={user.email} className="input mt-2 w-full max-w-xs" />
            <input type="number" name='mobile' placeholder="Mobile" className="input mt-2 w-full max-w-xs" />
            <input type="submit" value='Submit' className="btn mt-2 btn-primary text-white bg-gradient-to-r from-secondary to-primary w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;