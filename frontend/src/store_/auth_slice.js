import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import api from '../api/endpoints'

const initialState = {loading:false, isAuthorized:false, user:{}, traders:[]}

const logInUser = createAsyncThunk('', async (formData)=>{
    const res = await api.signin(formData)
    return res.data
})

const getTraders=createAsyncThunk('get-traders', async ()=>{
  const res = await api.getAllTraders()
  return res.data
})

export const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    addMember:()=>{}
  },

  extraReducers:(build)=>{
      build
      .addCase(logInUser.fulfilled,(state, action)=>{
        state.isAuthorized = true
        const token = action.payload.token
        const user = action.payload.user
        state.user = user
        api.setAuthorization(token)
        localStorage.setItem('token', token)
      });
      build.addCase(getTraders.pending, (action, state)=>{
      }).addCase(getTraders.fulfilled, (state, action)=>{
        state.traders = action.payload
        state.loading = false
      })
  }
})

export const AUTH_ACTIONS = {...authSlice.actions, logInUser, getTraders}
export default authSlice.reducer
