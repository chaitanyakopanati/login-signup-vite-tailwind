// import React from 'react';
// import Login from './Login';
// import Signup from './Signup';
// import ForgotPassword from './ForgotPassword';
// // import { useSelector } from 'react-redux';
// import Dashboard from './Dashboard';

// const Home = () => {
//   // const { user } = useSelector((state) => state.auth);
//   // console.log("userHome",object)
//   let user="";
//   return (
//     <div>
//       <h1 className='flex justify-center mb-2 p-8 font-bold'>Welcome to Home Page</h1>
//       {user?.length>0 && user?(
//         <Dashboard />
//       ) : (
//         <>
//           <Signup />
//           <Login />
//           <ForgotPassword />
//         </>
//       )}
//     </div>
//   );
// };

// export default Home;


// src/components/Pages/Home.jsx
import React from 'react';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import Dashboard from './Dashboard';

const Home = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h1 className='flex justify-center mb-2 p-8 font-bold'>Welcome to Home Page</h1>
      {user ? (
        `user?(<Dashboard />):(<Login />)`
      ) : (
        <>
         {/* <Login /> */}
          <Signup />
          <ForgotPassword />
        </>
      )}
    </div>
  );
};

export default Home;
