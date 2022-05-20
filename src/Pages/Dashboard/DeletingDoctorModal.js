import React from 'react';
import { toast } from 'react-toastify';

const DeletingDoctorModal = ({ refetch, deleteDoctor, setDeleteDoctor }) => {
  const { name, email } = deleteDoctor;
  const handleDeleteDoctor = () => {
    fetch(`http://localhost:5000/doctors/${email}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          toast.success('Doctor is removed');
          setDeleteDoctor(null)
          refetch();
        }
      })
  }
  return (
    <div>
      <input type="checkbox" id="deleting-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Please Confirm removing {name}</h3>
          <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div class="modal-action">
            <button onClick={() => handleDeleteDoctor()}
              class="btn btn-xs">Remove</button>
            <label for="deleting-modal" class="btn btn-xs">Cancel!</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletingDoctorModal;