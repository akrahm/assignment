import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { PostsReducers } from "./posts/reducer";

export const AppReducer: Reducer = combineReducers({
  posts: PostsReducers,
});

const rootReducer = (state: any, action: any) => {
  return AppReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});

export type StoreDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof AppReducer>;
