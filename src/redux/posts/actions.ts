import { PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../types";
import { IPostInitialState } from "./types";

export const setPostListsAction = (
  state: IPostInitialState,
  action: PayloadAction<IPost[]>
) => {
  state.posts = action.payload;
};

export const setSelectedPostAction = (
  state: IPostInitialState,
  action: PayloadAction<IPost>
) => {
  state.selectedPost = action.payload;
};
