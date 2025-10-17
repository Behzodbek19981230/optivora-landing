import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { PartnerService } from '@/lib/api';
import { Partner } from '@/types/partner';

export interface PartnerState {
  loading: boolean;
  error: string | null;
  data: Partner[] | null;
  raw?: any;
}

const initialState: PartnerState = {
  loading: false,
  error: null,
  data: null,
};

export const fetchPartners = createAsyncThunk('partner/fetch', async () => {
  const resp = await PartnerService();
  return resp;
});

const partnerSlice = createSlice({
  name: 'partner',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<PartnerState>) => {
    builder.addCase(fetchPartners.pending, (state: PartnerState) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPartners.fulfilled, (state: PartnerState, action: PayloadAction<any>) => {
      state.loading = false;
      state.raw = action.payload;
      state.data = action.payload?.results || null;
    });
    builder.addCase(fetchPartners.rejected, (state: PartnerState, action: any) => {
      state.loading = false;
      state.error = action?.error?.message || action?.message || 'Failed to load';
    });
  },
});

export default partnerSlice.reducer;
export const partnerActions = { ...partnerSlice.actions, fetchPartners };
// Selectors
import type { RootState } from './index';
export const selectPartnerState = (state: RootState) => state.partner;
export const selectPartners = (state: RootState) => state.partner.data;
export const selectPartnerLoading = (state: RootState) => state.partner.loading;
export const selectPartnerError = (state: RootState) => state.partner.error;
