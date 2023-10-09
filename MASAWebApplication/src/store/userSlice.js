/* eslint import/no-extraneous-dependencies: off */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const setUser = createAsyncThunk('user/setUser', async (user) => {
  let userObj = {
    role: ["user"],
    data: {
      id: 1,
      displayName: user.email.split("@")[0],
      photoURL: '',
      email: user.email,
      isSuperAdmin: true,
      roles: [],
      images: []
    }
  }
  return userObj;
});

const initialState = {
  role: ["guest"], // guest
  data: {
    id: 1,
    displayName: 'Sample User',
    photoURL: '',
    email: 'sampleuser@gmail.com',
    isSuperAdmin: false,
    roles: [],
  },
  loading: { val: false }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoading: (state, action) => {
      state.loading.val = action.payload
    },
    userLoggedOut: (state, action) => initialState,
  },
  extraReducers: {
    [setUser.fulfilled]: (state, action) => {
      state.role = action.payload.role;
      state.data = action.payload.data;
    }
  },
});

export const { setUserLoading, userLoggedOut } = userSlice.actions;

export const selectUser = ({ user }) => user;

export default userSlice.reducer;
