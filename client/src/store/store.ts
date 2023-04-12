import {configureStore} from '@reduxjs/toolkit';
import HomeSlice from './slices/home.slice';

export const store = configureStore({
  reducer: {
    home: HomeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
