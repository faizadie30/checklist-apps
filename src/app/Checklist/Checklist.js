import { createSlice, createAsyncThunk } from '@reduxjs/toolkit/';
import Service from '../../service';

const initialState = {
  data: {},
};

export const getDataChecklist = createAsyncThunk(
  'checklistSetup/getListChecklist',
  async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await Service.ApiLogin(config);
    return response;
  }
);

export const ChecklistSlice = createSlice({
  name: 'checklistSetup',
  initialState,
  reducers: {
    clearData: (state) => {
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataChecklist.fulfilled, (state, action) => {
      const resData = action.payload.data;
      console.log('resData:', resData);
      //   state.data = resData.data.token;
      return state;
    });
  },
});

/* export state */
export const checklistSelector = (state) => state.checklistSetup;

/* export command function from reducer */
export const { clearData } = ChecklistSlice.actions;

/* export all reducer auth slice */
export default ChecklistSlice.reducer;
