import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './contentSlice';
import appStateReducer from './appStateSlice';

export const store = configureStore({
    reducer: {
        content: contentReducer,
        appState: appStateReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;