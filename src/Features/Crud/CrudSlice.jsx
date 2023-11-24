import { createSlice } from "@reduxjs/toolkit";
import {
  addUsers,
  deleteUsers,
  editUsers,
  getUsers,
  updateUsers,
} from "../../Api/Contents";

const initialState = {
  data: [],
  singledata: {},
  status: "idle",
  error: null,
  isRefresh: false,
};

const CrudSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (userOp) => {
    // Read User
    userOp.addCase(getUsers.pending, (state) => {
      state.status = "loading";
    });

    userOp.addCase(getUsers.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });

    userOp.addCase(getUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });

    // Add User
    userOp.addCase(addUsers.pending, (state) => {
      state.status = "loading";
      state.isRefresh = false;
    });
    userOp.addCase(addUsers.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
      state.isRefresh = true;
    });
    userOp.addCase(addUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
      state.isRefresh = false;
    });
    //Delete User
    userOp.addCase(deleteUsers.pending, (state) => {
      state.status = "loading";
      state.isRefresh = false;
    });
    userOp.addCase(deleteUsers.fulfilled, (state, action) => {
      state.status = "success";
      state.data = state.data.filter((y) => y.id !== action.payload);
      state.isRefresh = true;
    });
    userOp.addCase(deleteUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
      state.isRefresh = false;
    });

    //Edit User
    userOp.addCase(editUsers.pending, (state) => {
      state.status = "loading";
      state.isRefresh = false;
    });
    userOp.addCase(editUsers.fulfilled, (state, action) => {
      state.status = "success";
      state.singledata = action.payload;
      state.isRefresh = true;
    });
    userOp.addCase(editUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
      state.isRefresh = false;
    });
    //update User
    userOp.addCase(updateUsers.pending, (state) => {
      state.status = "loading";
      state.isRefresh = false;
    });
    userOp.addCase(updateUsers.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
      state.isRefresh = true;
    });
    userOp.addCase(updateUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
      state.isRefresh = false;
    });
  },
});

export const {} = CrudSlice.actions;

export default CrudSlice.reducer;
