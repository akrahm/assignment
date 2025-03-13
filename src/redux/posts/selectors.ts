import { AppState } from "../store";

export const selectedPostsListSelector = (state: AppState) => state.posts.posts;

export const selectedPostSelector = (state: AppState) =>
  state.posts.selectedPost;
