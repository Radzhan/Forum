import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axiosApi from "../axiosApi";

interface ViginerInterface {
    messageArray: [];
}

const initialState: ViginerInterface = {
    message: '',
};

export const viginerSlice = createSlice({
    name: 'viginer',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
    },
});

export const ViginerReducer = viginerSlice.reducer;
export const Message = (state: RootState) => state.viginer.message;