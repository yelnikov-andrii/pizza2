import { createSlice } from '@reduxjs/toolkit';

export const authSlice: any = createSlice({
  name: 'auth',
  initialState: {
    user: null as any,
  },
  reducers: {
    setUser: (state, action: any) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;