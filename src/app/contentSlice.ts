import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import queryString from 'query-string';
import { returnStateIfValid } from "../functions/returnStateIfValid";
import { maxState } from "./globalData";

const urlParams = queryString.parse(window.location.search);

export interface ContentState {
    type: number,
    category: number,
    dark: number,
    mockup: number,
    color: number,
}

const initialState: ContentState = {
    type: returnStateIfValid(urlParams.type, maxState.type),
    category: returnStateIfValid(urlParams.category, maxState.category),
    dark: returnStateIfValid(urlParams.dark, maxState.dark),
    mockup: returnStateIfValid(urlParams.mockup, maxState.mockup),
    color: returnStateIfValid(urlParams.color, maxState.color),
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