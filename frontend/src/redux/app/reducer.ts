import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAPIResponse } from "../../constants/interface";
import { IClient } from "../clients/thunk";

const initialState = {
  isLoggedIn: false,
  setAppUser: {} as IClient,
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    isLoggedInTrue: (state, { payload }) => {
      state.isLoggedIn = payload;
    },

    setAppUser: (state, { payload }: PayloadAction<IClient>) => {
      state.setAppUser = payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { isLoggedInTrue, setAppUser } = app.actions;
export default app.reducer;
