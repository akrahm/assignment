import { IPost } from "../../types";

export interface IPostInitialState {
  posts: IPost[];
  selectedPost: IPost | null;
}
