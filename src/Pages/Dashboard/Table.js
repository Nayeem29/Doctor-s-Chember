import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Table = ({ user, index, refetch }) => {
  const { email, role } = user;
  const navigate = useNavigate()
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => {
      if (res.status === 401 || res.status === 403) {
        toast.error('Failed to make Admin')
        navigate('/')
      }
      return res.json()
    })
      .then(data => {
        if (data.modifiedCount > 0) {
          // console.log(data)
          refetch();
          toast.success(`Congrats! Admin is made`);
        }
      })
  }
  return (

    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{!role ? <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button> :
        <button class="btn btn-xs">Already Admin</button>}</td>
      <td><button class="btn btn-xs">Remove</button></td>
    </tr>

  );
};

export default Table;