import React from 'react';


const DoctorRow = ({ doctor, index, refetch, setDeleteDoctor }) => {
  const { img, name, specialty } = doctor;

  return (

    <tr>
      <th>{index + 1}</th>
      <div class="w-24 rounded-full">
        <td>
          <img src={img} alt='' />
        </td>
      </div>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <label onClick={() => setDeleteDoctor(doctor)} htmlFor="deleting-modal" class="btn modal-button">Remove</label>
      </td>
    </tr>
  );
};

export default DoctorRow;