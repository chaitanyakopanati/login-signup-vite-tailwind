// import React from 'react';
// // import { useDispatch,useSelector  } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// // import { logout } from '../../features/auth/authSlice';

// const Dashboard = () => {
//   // const dispatch = useDispatch();
//   const navigate = useNavigate();
//   // const user = useSelector(state => state.auth.user);
// const user="";
//   const handleLogout = () => {
//     // dispatch(logout());
//     // navigate('/login');
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       {user ? <p>Welcome, {user.email}</p> : <p>Loading...</p>}
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Dashboard;


// src/components/Pages/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth).then(() => navigate('/login'));
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? <p>Welcome, {user.email}</p> : <p>Loading...</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
