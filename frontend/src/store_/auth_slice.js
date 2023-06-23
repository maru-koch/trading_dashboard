import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/endpoints';

// Name of reducer
const name = 'auth';

const initialState = { registered: null, authorized: false, loading: false, user: {} };

const authSlice = createSlice({
  name: name,
  initialState,
  reducers:{
    login: async (state, action)=>{
        const res = await api.signin(action.payload)
        if (res.status === 200){

          const token = res.data.token
          state.authorized = true
          state.user = res.data.user
          api.setAuthorization(token)
          localStorage.setItem('token', token)
        }  

        console.log("USER", state.user)
        }
    }
  }

);

export const AUTH_ACTIONS = {...authSlice.actions};
export default authSlice.reducer
