import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchUtils } from "../../utils/fetchUtils";

export interface IClient {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  subscribedEvents: string[];
}

export interface ICreateClientPayload {
  email: string;
  name: string;
  password: string;
  confirmpassword :string;
  subscribedEvents: string[];
}

export const getAllClients = createAsyncThunk<IClient[]>(
  "getEvents",
  async (_, { rejectWithValue }) => {
    try {
      return await FetchUtils.getRequest<IClient[]>("/user");
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
