import { createSlice } from "@reduxjs/toolkit";
import { setPostListsAction, setSelectedPostAction } from "./actions";
import { initialState } from "./initialState";

const helpersSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostLists: setPostListsAction,
    setSelectedPost: setSelectedPostAction,
  },
});

export const PostsReducers = helpersSlice.reducer;
export const { setPostLists, setSelectedPost } = helpersSlice.actions;
