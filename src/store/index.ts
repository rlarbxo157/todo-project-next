import { configureStore, Action } from '@reduxjs/toolkit';
import {setupListeners} from "@reduxjs/toolkit/query";
import { registerApi } from './api/registerApi';

export const store = configureStore({
    reducer: {
        [registerApi.reducerPath]: registerApi.reducer       
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(),
    devTools:process.env.NODE_ENV ==="development"    
})

export type RootState = ReturnType<typeof store.getState>;
export default store;
setupListeners(store.dispatch);