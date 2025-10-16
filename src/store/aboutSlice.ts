import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { CompanyProfileService } from '@/lib/api'
import { AboutPageData } from '@/types/about'

export interface AboutState {
  loading: boolean
  error: string | null
  data: AboutPageData | null
  raw?: any
}

const initialState: AboutState = {
  loading: false,
  error: null,
  data: null,
}

export const fetchCompanyProfile = createAsyncThunk('about/fetch', async () => {
  const resp = await CompanyProfileService()
  return resp
})

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<AboutState>) => {
    builder.addCase(fetchCompanyProfile.pending, (state: AboutState) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(fetchCompanyProfile.fulfilled, (state: AboutState, action: PayloadAction<any>) => {
      state.loading = false
      state.raw = action.payload
      const first = action.payload?.results && action.payload.results.length > 0 ? action.payload.results[0] : null
      state.data = first
    })
    builder.addCase(fetchCompanyProfile.rejected, (state: AboutState, action: any) => {
      state.loading = false
      state.error = action?.error?.message || action?.message || 'Failed to load'
    })
  },
})

export default aboutSlice.reducer
