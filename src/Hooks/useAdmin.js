import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  const email = user.email;
  useEffect(() => {
    fetch(`https://stormy-plateau-40538.herokuapp.com/admin/${email}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data.admin);
        setAdmin(data.admin)
        setAdminLoading(false);
      })
  }, [user, email]);
  return [admin, adminLoading];
}
export default useAdmin;
