import { createAsyncThunk } from "@reduxjs/toolkit";
import { IEvent } from "../../constants/interface";
import { FetchUtils } from "../../utils/fetchUtils";

export const getEvents = createAsyncThunk<IEvent[]>(
  "getEvents",
  async (_, { rejectWithValue }) => {
    try {
      return await FetchUtils.getRequest<IEvent[]>("/events");
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
