import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info: null,
};

export const showSlice = createSlice({
    name: "show",
    initialState,
    reducers: {
        loadShow: (state, action) => {
            state.info = action.payload;
        },
        removeShow: (state, action) => {
            state.info = null;
        },
    },
});

export const { loadShow, removeShow } = showSlice.actions;

export default showSlice.reducer;
