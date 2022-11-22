import { createSlice, createAsyncThunk } from '@reduxjs/toolkit/';
import Service from '../../service';

const initialState = {
  token: '',
  username: '',
  email: '',
};

export const authLogin = createAsyncThunk('authSetup/login', async (data) => {
  const response = await Service.ApiLogin(data);
  return response;
});

export const AuthSlice = createSlice({
  name: 'authSetup',
  initialState,
  reducers: {
    saveSessions: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authLogin.fulfilled, (state, action) => {
      const resData = action.payload.data;
      state.token = resData.data.token;
      return state;
    });
  },
});

/* export state */
export const authSelector = (state) => state.authSetup;

/* export command function from reducer */
export const { saveSessions } = AuthSlice.actions;

/* export all reducer auth slice */
export default AuthSlice.reducer;
