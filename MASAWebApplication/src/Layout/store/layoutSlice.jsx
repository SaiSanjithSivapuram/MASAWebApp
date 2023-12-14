/* eslint import/no-extraneous-dependencies: off */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dialog: { open: false },
};

const layoutSlice = createSlice({
    name: 'layoutStore',
    initialState,
    reducers: {
        openDialog: (state) => {
            state.dialog.open = true
        },
        closeDialog: (state) => {
            state.dialog.open = false
        }
    },
    extraReducers: {
    },
});

export const { openDialog, closeDialog } = layoutSlice.actions

export default layoutSlice.reducer;
