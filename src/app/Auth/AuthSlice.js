import { createSlice } from '@reduxjs/toolkit/';

const initialState = {
  token: '',
  username: '',
  email: '',
};

export const AuthSlice = createSlice({
  name: 'authSetup',
  initialState,
  reducers: {
    saveSessions: (state, action) => {
      state.token = action.payload;
    },
  },
});

/* export state */
export const authSelector = (state) => state.authSetup;

/* export command function from reducer */
export const { saveSessions } = AuthSlice.actions;

/* export all reducer auth slice */
export default AuthSlice.reducer;
