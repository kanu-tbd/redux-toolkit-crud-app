import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseURL = "https://650bc2aa47af3fd22f6676ec.mockapi.io/User";

// Define an async thunk for fetching users
export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get(baseURL);
  return response.data;
});

// Define an async thunk for Add users
export const addUsers = createAsyncThunk("users/addUsers", async (user) => {
  console.log(user, "api");
  const response = await axios.post(baseURL, user);
  return response.data;
});

// Define an async thunk for Delete users
export const deleteUsers = createAsyncThunk("users/deleteUsers", async (id) => {
  console.log(id, "api--", `${baseURL}/${id}`);
  const response = await axios.delete(`${baseURL}/${id}`);
  return response.data;
});

// Define an async thunk for Edit users
export const editUsers = createAsyncThunk("users/editUsers", async (id) => {
  console.log(id, "api--", `${baseURL}/${id}`);
  const response = await axios.get(`${baseURL}/${id}`);
  return response.data;
});

// Define an async thunk for Edit users
export const updateUsers = createAsyncThunk("users/updateUsers", async (user) => {
  console.log(user.id, "api--", `${baseURL}/${user.id}`);
  const response = await axios.put(`${baseURL}/${user.id}`);
  return response.data;
});
