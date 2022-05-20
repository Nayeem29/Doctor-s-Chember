import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import DoctorRow from './DoctorRow';
import DeletingDoctorModal from './DeletingDoctorModal';


const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctors', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => {
    return res.json()
  })
  );
  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      <h1>All Doctors are here:</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead>
            <tr>
              <th>No.</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody className='overflow-x-auto'>
            {
              doctors.map((doctor, index) =>
                <DoctorRow
                  key={index}
                  index={index}
                  doctor={doctor}
                  setDeleteDoctor={setDeleteDoctor}
                  refetch={refetch}
                ></DoctorRow>
              )
            }
          </tbody>
        </table>
      </div>
      {
        deleteDoctor && <DeletingDoctorModal
          deleteDoctor={deleteDoctor}
          setDeleteDoctor={setDeleteDoctor}
          refetch={refetch}
        ></DeletingDoctorModal>
      }
    </div>
  );
};

export default ManageDoctors;