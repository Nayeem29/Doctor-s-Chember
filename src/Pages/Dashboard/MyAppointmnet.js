import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const MyAppointmnet = () => {
  const [appointments, setAppointments] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          console.log('res', res)
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            navigate('/');
          }
          return res.json()
        })
        .then(data => setAppointments(data))
    }
  }, [user, navigate]);
  if (loading) {
    return <Loading />
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Treatment</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {
            appointments.map((a, index) =>
              <tr>
                <th>{index + 1}</th>
                <td>{a.patientEmail}</td>
                <td>{a.treatment}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointmnet;