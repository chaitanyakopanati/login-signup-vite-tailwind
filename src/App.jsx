// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // import { useSelector } from 'react-redux';
// import Home from './components/Pages/Home';
// import Signup from './components/Pages/Signup';
// import Login from './components/Pages/Login';
// import Dashboard from './components/Pages/Dashboard';
// import ForgotPassword from './components/Pages/ForgotPassword';
// import NotFound from './components/Pages/NotFound';
// import NavbarNav from './components/layout/NavbarNav';

// const App = () => {
//   // const { user } = useSelector((state) => state.auth);
//     const isAuthenticated = "";
// console.log("isAuthenticated",isAuthenticated)
//   return (
//     <Router>
//       <div>
//         <div className='bg-slate-900 '>
//           <NavbarNav />
//         </div>
//         <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{ background: "url('../src/assets/01.jpg')" }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/forgot-password" element={<ForgotPassword />} />
//             <Route
//               path="/dashboard"
//               element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
//             />
//             <Route path="/services" element={<div>Services Page</div>} />
//             <Route path="/about" element={<div>About Page</div>} />
//             <Route path="/projects" element={<div>Projects Page</div>} />
//             <Route path="/contact" element={<div>Contact Page</div>} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Pages/Home';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import Dashboard from './components/Pages/Dashboard';
import ForgotPassword from './components/Pages/ForgotPassword';
import NotFound from './components/Pages/NotFound';
import NavbarNav from './components/layout/NavbarNav';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div>
        <div className='bg-slate-900'>
          <NavbarNav />
        </div>
        <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{ background: "url('../src/assets/01.jpg')" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
