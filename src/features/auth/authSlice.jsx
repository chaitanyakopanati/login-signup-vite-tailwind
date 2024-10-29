// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// const auth = getAuth();

// export const signUpUser = createAsyncThunk(
  
//   'auth/signUpUser',
//   async ({ email, password }, thunkAPI) => {
//     const response = await createUserWithEmailAndPassword(auth, email, password);
//     return response.user;
//   }
// );

// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async ({ email, password }, thunkAPI) => {
//     const response = await signInWithEmailAndPassword(auth, email, password);
//     return response.user;
//   }
// );

// export const googleLogin = createAsyncThunk(
//   'auth/googleLogin',
//   async (_, thunkAPI) => {
//     const provider = new GoogleAuthProvider();
//     const response = await signInWithPopup(auth, provider);
//     return response.user;
//   }
// );

// // export const resetPassword = createAsyncThunk(
// //   'auth/resetPassword',
// //   async ({ email }, thunkAPI) => {
// //     await sendPasswordResetEmail(auth, email);
// //   }
// // );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     loginStart: (state) => {
//       state.loading = true;
//     },
//     loginSuccess: (state, action) => {
//       state.loading = false;
//       state.user = action.payload;
//     },
//     loginFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     logout: (state) => {
//       state.user = null;
//     },
//     resetPassword: (state) => {
//       // Implement reset password logic here
//     }
//   },
// });
// export const { loginStart, loginSuccess, loginFailure, logout, resetPassword } = authSlice.actions;
// export default authSlice.reducer;

// // const authSlice = createSlice({
// //   name: 'auth',
// //   initialState: {
// //     user: null,
// //     status: 'idle',
// //     error: null,
// //   },
// //   reducers: {
// //     logout: (state) => {
// //       state.user = null;
// //     },
// //   },
// //   extraReducers: (builder) => {
// //     builder.addCase(signUpUser.fulfilled, (state, action) => {
// //         state.user = action.payload;
// //       })
// //       builder.addCase(loginUser.fulfilled, (state, action) => {
// //         state.user = action.payload;
// //       })
// //       builder.addCase(googleLogin.fulfilled, (state, action) => {
// //         state.user = action.payload;
// //       })
// //       builder.addCase(resetPassword.fulfilled, (state) => {
// //         state.status = 'reset';
// //       })
// //       builder.addCase(signUpUser.rejected, (state, action) => {
// //         state.error = action.error.message;
// //       })
// //       builder.addCase(loginUser.rejected, (state, action) => {
// //         state.error = action.error.message;
// //       })
// //       builder.addCase(googleLogin.rejected, (state, action) => {
// //         state.error = action.error.message;
// //       });
// //   },
// // });
// // export const { logout } = authSlice.actions;
// // export default authSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
// import { query, collection, onSnapshot } from 'firebase/firestore';
// import { db } from './firebase'; // Make sure to import your Firebase configuration

// const initialState = {
//   user: null,
//   error: null,
//   userData: [], // Add userData to store user information from Firestore
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setUser(state, action) {
//       state.user = action.payload;
//     },
//     setError(state, action) {
//       state.error = action.payload;
//     },
//     clearError(state) {
//       state.error = null;
//     },
//     setUserData(state, action) {
//       state.userData = action.payload;
//     },
//   },
// });

// export const { setUser, setError, clearError, setUserData } = authSlice.actions;

// export const loginUser = (email, password) => async dispatch => {
//   const auth = getAuth();
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     dispatch(setUser(userCredential.user));
//   } catch (error) {
//     dispatch(setError(error.message));
//   }
// };

// export const signUpUser = (email, password) => async dispatch => {
//   const auth = getAuth();
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     dispatch(setUser(userCredential.user));
//   } catch (error) {
//     dispatch(setError(error.message));
//   }
// };

// export const resetPassword = (email) => async dispatch => {
//   const auth = getAuth();
//   try {
//     await sendPasswordResetEmail(auth, email);
//   } catch (error) {
//     dispatch(setError(error.message));
//   }
// };

// // Fetch user data from Firestore
// export const fetchUserData = () => dispatch => {
//   const q = query(collection(db, "users")); // Replace "users" with your collection name
//   const unsub = onSnapshot(q, (querySnapshot) => {
//     let userDataArray = [];
//     querySnapshot.forEach((doc) => {
//       userDataArray.push({ ...doc.data(), id: doc.id });
//     });
//     dispatch(setUserData(userDataArray));
//   });
//   return unsub;
// };

// export default authSlice.reducer;
