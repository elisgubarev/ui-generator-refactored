import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ContentState {
    type: number,
    category: number,
    dark: number,
    mockup: number,
    color: number,
}

const initialState: ContentState = {
    type: 0,
    category: 0,
    dark: 0,
    mockup: 0,
    color: 0,
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
        changeDark: (state, action: PayloadAction<number>) => {
            state.dark = action.payload;
        },
        changeMockup: (state, action: PayloadAction<number>) => {
            state.mockup = action.payload;
        },
        changeColor: (state, action: PayloadAction<number>) => {
            state.color = action.payload;
        },
    },
})

export const { changeType, changeCategory, changeDark, changeMockup, changeColor } = contentSlice.actions;

export default contentSlice.reducer;