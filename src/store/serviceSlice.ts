import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { ServiceOursService } from '@/lib/api';
import { Service } from '@/types/service';

export interface ServiceState {
  loading: boolean;
  error: string | null;
  data: Service[] | null;
  raw?: any;
}

const initialState: ServiceState = {
  loading: false,
  error: null,
  data: null,
};

export const fetchServices = createAsyncThunk('service/fetch', async () => {
  const resp = await ServiceOursService();
  return resp;
});

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<ServiceState>) => {
    builder.addCase(fetchServices.pending, (state: ServiceState) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchServices.fulfilled, (state: ServiceState, action: PayloadAction<any>) => {
      state.loading = false;
      state.raw = action.payload;
      state.data = action.payload?.results || null;
    });
    builder.addCase(fetchServices.rejected, (state: ServiceState, action: any) => {
      state.loading = false;
      state.error = action?.error?.message || action?.message || 'Failed to load';
    });
  },
});


export default serviceSlice.reducer;
export const serviceActions = { ...serviceSlice.actions, fetchServices };

// Selectors
import type { RootState } from './index';
export const selectServiceState = (state: RootState) => state.service;
export const selectServices = (state: RootState) => state.service.data;
export const selectServiceLoading = (state: RootState) => state.service.loading;
export const selectServiceError = (state: RootState) => state.service.error;
