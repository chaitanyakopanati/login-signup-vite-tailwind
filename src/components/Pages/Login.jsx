import React, { useState } from 'react';
import { AiOutlineUnlock } from 'react-icons/ai'; 
// import { useDispatch, useSelector } from 'react-redux';
import { BiUser } from 'react-icons/bi';
import { useNavigate,Link } from 'react-router-dom';
// import { loginUser, googleLogin } from '../../features/auth/authSlice';
// import { auth } from "../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const error = useSelector(state => state.auth.error);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // dispatch(loginUser({ email, password })).then(() => {
    //   navigate('/dashboard');
    // });
    // e.preventDefault();
    // try {
    //   await signInWithEmailAndPassword(auth, email, password);
    //   navigate("/dashboard");
    // } catch (error) {
    //   console.error("Error signing in: ", error);
    // }
  };
  const handleGoogleLogin = () => {
    dispatch(googleLogin()).then(() => {
      navigate('/dashboard');
    });
  };
  

  return (
    <div>
      <div className='border-slate-100 mr-10 ml-0 bg-gray-900 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
        <form onSubmit={handleSubmit}>
          <h2 className='text-4xl text-white font-bold text-center mb-6'>Login</h2>
          <div className='relative my-4'>
           <div className='flex justify-between'><label htmlFor='email'>Email</label>
           <span className='mr-0'><BiUser /></span>
           </div> 
            <input
              className='outline outline-offset-2 outline-1 block w-72 py-2.3 px-0 text-sm text-white bg-gray-700  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='relative my-4'>
          <div className='flex justify-between '><label htmlFor='password'>Password</label>
           <span className='mr-0'><AiOutlineUnlock /></span>
            </div> 
            <input
              className='outline outline-offset-2 outline-1 block w-72 py-2.3 px-0 text-sm text-white bg-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <input type='checkbox' name='' id='' />
              <label htmlFor='Remember me'>Remember Me</label>
            </div>
            <Link to='/forgot-password' className='text-blue-500'>Forget Password?</Link>
          </div>
          <button
            className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emrald-600 hover:text-white py-2 transition-colors duration-300'
            type="submit"
          >
            Login
          </button>
          <div>
            <span className='m-4 px-5'><small>Don't have an account? Sign Up</small> <Link className='text-blue-500' to='/signup'>SignUp</Link></span>
          </div>
        </form>
        <button onClick={handleGoogleLogin}>Login with Google</button>
      </div>
      {/* {error && <p>{error}</p>} */}
    </div>
  );
};

export default Login;
