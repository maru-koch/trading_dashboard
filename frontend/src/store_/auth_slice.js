import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import api from '../api/endpoints'

const initialState = {loading:false, isAuthorized:false, user:{}, traders:[], task:{status:'', task_id:''}}

const logInUser = createAsyncThunk('', async (formData)=>{
    const res = await api.signin(formData)
    return res.data
})

const getTraders=createAsyncThunk('get-traders', async ()=>{
  const res = await api.getAllTraders()
  return res.data
})

const generateTrades = createAsyncThunk('generate-trades',async ()=>{
  const res = api.generateData()
  const task_id = res.data.celery_task_id
  return task_id
})

const checkTaskStatus = createAsyncThunk('check-status', async (task_id)=>{
  const res = api.checkTaskStatus(task_id)
  return res.data.status
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

      build.addCase(generateTrades.pending, (state, action)=>{
      state.loading = true

      }).addCase(generateTrades.fulfilled, (state, action)=>{
        state.task.task_id = action.payload
        console.log('TASK ID:', state.task.task_id)
        state.loading = true

      });

      build.addCase(checkTaskStatus.pending, (state, action)=>{
      state.loading = true

      }).addCase(checkTaskStatus.fulfilled, (state, action)=>{
        state.task.status = action.payload
        state.loading = true

      });

      build.addCase(getTraders.pending, (action, state)=>{
      state.loading = true

      }).addCase(getTraders.fulfilled, (state, action)=>{
        state.traders = action.payload
        state.loading = false

      });

  }
})

export const AUTH_ACTIONS = {...authSlice.actions, logInUser, getTraders, generateTrades, checkTaskStatus}
export default authSlice.reducer
