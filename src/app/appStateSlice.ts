import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
    imageLoading: boolean;
}

const initialState: AppState = {
    imageLoading: false,
}

export const appStateSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        changeImageLoading: (state, action: PayloadAction<boolean>) => {
            state.imageLoading = action.payload;
        },
    },
});

export const { changeImageLoading } = appStateSlice.actions;

export default appStateSlice.reducer;