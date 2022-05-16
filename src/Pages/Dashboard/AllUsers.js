import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Table from './Table';

const AllUsers = () => {
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/allusers', {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  })
    .then(res => res.json()))

  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      <h1>All Users:{users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-auto">

          <thead>
            <tr>
              <th>No.</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className='overflow-x-auto'>
            {
              users.map((user, index) =>
                <Table
                  key={index}
                  index={index}
                  user={user}
                  refetch={refetch}
                ></Table>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;