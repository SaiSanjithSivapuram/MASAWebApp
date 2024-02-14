/* eslint import/no-extraneous-dependencies: off */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    projectsData: { data: [], loading: true },
    searchText: ""
};

const projectSlice = createSlice({
    name: 'projectStore',
    initialState,
    reducers: {
        setProjectInput: (state, action) => {
            state.searchText = action.payload;
        },
        clearProjectInput: (state) => {
            state.searchText = ""
        },
        setProjectsData: (state, action) => {
            state.projectsData.data = action.payload;
            state.projectsData.loading = false;
        }
    }
});

export const { setProjectInput, clearProjectInput, setProjectsData } = projectSlice.actions

export default projectSlice.reducer;