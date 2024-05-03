import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './theme/themeSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Configure the store
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// Define RootState and AppDispatch types based on the configured store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed versions of the useDispatch and useSelector hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
