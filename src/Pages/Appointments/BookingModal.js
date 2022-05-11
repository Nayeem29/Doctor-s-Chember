import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { name, slots } = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />

      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
          <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg">Booking for: {name}</h3>
          <p class="py-4 text-secondary font-bold">{slots}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;