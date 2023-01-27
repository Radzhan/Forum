import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import axiosApi from "../axiosApi";
import { Api, MessageApi } from "../types";

interface MessageInterface {
    messageArray: MessageApi[];
};

const initialState: MessageInterface = {
    messageArray: [],
};

export const getMessages = createAsyncThunk<MessageApi[]>('message/fetchAll', async () => {
    const request = await axiosApi.get('messages');

    return request.data;
});

export const postMessages = createAsyncThunk<void, Api>('message/Post', async (arg) => {
    const formData = new FormData();
    const keys = Object.keys(arg) as (keyof Api)[];

    keys.forEach(key => {
      const value = arg[key];

      if (value !== null) {
        formData.append(key, value);
      }
    });

    await axiosApi.post('messages', formData);
});

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getMessages.fulfilled, (state, action) => {
            state.messageArray = action.payload;
        });
    },
});

export const MessageReducer = messageSlice.reducer;
export const Message = (state: RootState) => state.message.messageArray;