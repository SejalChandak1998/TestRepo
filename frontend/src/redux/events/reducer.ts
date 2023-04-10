import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAPIResponse, IEvent } from "../../constants/interface";
import { getEvents } from "./thunk";

interface IEventState {
  eventList: IEvent[];
}

const initialState: IEventState = {
  eventList: [],
};

const event = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getEvents.fulfilled,
      (state, { payload }: PayloadAction<IEvent[]>) => {
        state.eventList = payload;
      }
    );
  },
});

export const {} = event.actions;
export default event.reducer;
