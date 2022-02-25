import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AppState {
    type: number,
    category: number,
    color: number,
    dark: number,
    mockup: number
}

const initialState: AppState = {
    type: 0,
    category: 0,
    color: 0,
    dark: 0,
    mockup: 0
}

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        changeType: (state, action: PayloadAction<number>) => {
            state.type = action.payload;
        },
        changeCategory: (state, action: PayloadAction<number>) => {
            state.category = action.payload;
        },
        changeColor: (state, action: PayloadAction<number>) => {
            state.color = action.payload;
        },
        changeDark: (state, action: PayloadAction<number>) => {
            state.dark = action.payload;
        },
        changeMockup: (state, action: PayloadAction<number>) => {
            state.mockup = action.payload;
        },
    },
})

export const {changeType, changeCategory, changeColor, changeDark, changeMockup} = contentSlice.actions;

export default contentSlice.reducer;