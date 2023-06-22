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
          state.authorized = true
          state.user = res.data.user
          localStorage.setItem('token', res.data.token)
        }  
        }
    }
  }

);

export const AUTH_ACTIONS = {...authSlice.actions};
export default authSlice.reducer
