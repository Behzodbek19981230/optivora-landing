import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { IndustryService } from '@/lib/api';
import { Industry } from '@/types/industry';

export interface IndustryState {
  loading: boolean;
  error: string | null;
  data: Industry[] | null;
  raw?: any;
}

const initialState: IndustryState = {
  loading: false,
  error: null,
  data: null,
};

export const fetchIndustries = createAsyncThunk('industry/fetch', async () => {
  const resp = await IndustryService();
  return resp;
});

const industrySlice = createSlice({
  name: 'industry',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IndustryState>) => {
    builder.addCase(fetchIndustries.pending, (state: IndustryState) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchIndustries.fulfilled, (state: IndustryState, action: PayloadAction<any>) => {
      state.loading = false;
      state.raw = action.payload;
      state.data = action.payload?.results || null;
    });
    builder.addCase(fetchIndustries.rejected, (state: IndustryState, action: any) => {
      state.loading = false;
      state.error = action?.error?.message || action?.message || 'Failed to load';
    });
  },
});

export default industrySlice.reducer;
export const industryActions = { ...industrySlice.actions, fetchIndustries };
// Selectors
import type { RootState } from './index';
export const selectIndustryState = (state: RootState) => state.industry;
export const selectIndustries = (state: RootState) => state.industry.data;
export const selectIndustryLoading = (state: RootState) => state.industry.loading;
export const selectIndustryError = (state: RootState) => state.industry.error;
