import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { name, slots } = treatment;
  const handleBooking = e => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot, name);
    e.target.reset();
    setTreatment(null);
  }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />

      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg">Booking for: {name}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-2 justify-items-center'>
            <input type="text" disabled value={format(date, 'PP')} className="input mt-2 w-full max-w-xs" />
            <select name='slot' className="select mt-2 w-full max-w-xs">
              {
                slots.map(slot =>
                  <option value={slot}>{slot}</option>
                )
              }
            </select>
            <input type="email" name='email' placeholder="Email" className="input mt-2 w-full max-w-xs" />
            <input type="number" name='mobile' placeholder="Mobile" className="input mt-2 w-full max-w-xs" />
            <input type="submit" value='Submit' className="btn mt-2 btn-primary text-white bg-gradient-to-r from-secondary to-primary w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;