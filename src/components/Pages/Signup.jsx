// import React, { useState } from 'react';
// import { AiOutlineUnlock } from 'react-icons/ai'; 
// import { BiUser } from 'react-icons/bi';
// import { useNavigate,Link } from 'react-router-dom';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { signUpUser } from '../../features/auth/authSlice';
// // import { createUserWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../firebase";

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();
//   // const dispatch = useDispatch();
//   // const { error } = useSelector((state) => state.auth);

//   const handleSubmit = async (e) => {
//     // e.preventDefault();
//     // if (password !== confirmPassword) {
//     //   alert("Passwords do not match");
//     //   return;
//     // }
//     // dispatch(signUpUser({ email, password })).then(() => {
//     //   navigate('/dashboard');
//     // });
//     // e.preventDefault();
//     // try {
//     //   await createUserWithEmailAndPassword(auth, email, password);
//     //   navigate("/dashboard");
//     // } catch (error) {
//     //   console.error("Error signing up: ", error);
//     // }
//   };


//   return (<>
//   <div>
//       <div className='border-slate-100 mr-10 ml-0 bg-gray-900 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
//         <form onSubmit={handleSubmit}>
//           <h2 className='text-4xl text-white font-bold text-center mb-6'>SignUp</h2>
//           <div className='relative my-4'>
//            <div className='flex justify-between'><label htmlFor='email'>Email</label>
//            <span className='mr-2'><BiUser /></span>
//            </div> 
//             <input
//               className='outline outline-offset-2 outline-1 block w-72 py-2.3 px-0 text-sm text-white bg-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className='relative my-4'>
//           <div className='flex justify-between'><label htmlFor='password'>Password</label>
//            <span className='mr-2'><AiOutlineUnlock /></span>
//             </div> 
//             <input
//               className='outline outline-offset-2 outline-1 block w-72 py-2.3 px-0 text-sm text-white bg-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//           <div className='flex justify-between'><label htmlFor='confirm password'>Confirm Password</label>
//            <span className='mr-2'><AiOutlineUnlock /></span>
//             </div> 
//             <input
//               className='outline outline-offset-2 outline-1 block w-72 py-2.3 px-0 text-sm text-white bg-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
//               type="password"
//               placeholder="Confirm Password"
//               value={password}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emrald-600 hover:text-white py-2 transition-colors duration-300'
//             type="submit"
//           >
//             SignUp Here
//           </button>
//           <div>
//             <span className='m-4'><small>Already Created an Account?</small> <Link className='text-blue-500' to='/login'>LogIn</Link></span>
//           </div>
//         </form>
//       </div>
//       {/* {error && <p>{error}</p>} */}
//     </div>
//     </>);
// };

// export default Signup;




// src/components/Pages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("auth",auth)
      navigate('/dashboard');
      console.log('User signed up:', userCredential.user);
    } catch (error) {
      console.error("Error signing up: ", error);
    }
  };

  return (
    <div>
      <div className='border-slate-100 mr-10 ml-0 bg-gray-900 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
        <form onSubmit={handleSubmit}>
          <h2 className='text-4xl text-white font-bold text-center mb-6'>SignUp</h2>
          <div className='relative my-4'>
            <div className='flex justify-between'>
              <label htmlFor='email'>Email</label>
            </div>
            <input
              className='outline-none block w-72 py-2.3 px-0 text-sm text-white bg-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-600 peer'
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='relative my-4'>
            <div className='flex justify-between'>
              <label htmlFor='password'>Password</label>
            </div>
            <input
              className='outline-none block w-72 py-2.3 px-0 text-sm text-white bg-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-600 peer'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <div className='flex justify-between'>
              <label htmlFor='confirm password'>Confirm Password</label>
            </div>
            <input
              className='outline-none block w-72 py-2.3 px-0 text-sm text-white bg-gray-700 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-600 peer'
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300'
            type="submit"
          >
            SignUp Here
          </button>
          <div>
            <span className='m-4'><small>Already have an account?</small> <Link className='text-blue-500' to='/login'>LogIn</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
