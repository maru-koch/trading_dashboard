import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth_slice';
// import tradersReducer from './traders_slice';

const store = configureStore({
  reducer:{
      auth: authReducer,
      // traders:tradersReducer,

  },

    //...
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: {
          ignoredActions: ['TYPE'],
          ignoredActionPaths: ['property'],
          ignoredPaths: ['reducer.property']
      }
  })

  })



export default store;