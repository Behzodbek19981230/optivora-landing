

import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './aboutSlice';
import serviceReducer from './serviceSlice';
import partnerReducer from './partnerSlice';
import industryReducer from './industrySlice';



export const store = configureStore({
  reducer: {
    about: aboutReducer,
    service: serviceReducer,
    partner: partnerReducer,
    industry: industryReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
