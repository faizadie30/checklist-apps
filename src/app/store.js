import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Auth/AuthSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'authSetup/login/fulfilled',
          'checklistSetup/getListChecklist/fulfilled',
        ],
      },
    }),
  reducer: {
    authSetup: AuthReducer,
  },
});
