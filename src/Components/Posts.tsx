import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { setPostLists, setSelectedPost } from "../redux/posts/reducer";
import { selectedPostsListSelector } from "../redux/posts/selectors";
import { IPost } from "../types";
import {
  Container,
  Title,
  SearchBox,
  PostList,
  PostItem,
  PostLink,
} from "../styles/PostStyled";

const Posts = () => {
  const dispatch = useDispatch();
  const postsList = useSelector(selectedPostsListSelector);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(postsList);

  const fetchData = async () => {
    // fetch the data from public uri jsonPlaceholder
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();
      if (Array.isArray(posts) && posts?.length > 0) {
        dispatch(setPostLists(posts));
        //setPostList(posts);
      }
    } catch (err) {
      console.log("EERR", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setFilteredPosts(
        postsList.filter((post: IPost) =>
          post?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase())
        )
      );
    }, 1000); // Debounce search by 300ms

    return () => clearTimeout(handler);
  }, [searchTerm, postsList]);

  const handleClick = (post: IPost) => {
    dispatch(setSelectedPost(post));
  };

  return (
    <Container>
      <Title>Posts</Title>
      <SearchBox
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <PostList>
        {filteredPosts.map((post: IPost) => (
          <PostItem key={post.id}>
            {post.title}
            <PostLink onClick={() => handleClick(post)} to={`/post/${post.id}`}>
              {">>"}
            </PostLink>
          </PostItem>
        ))}
      </PostList>
    </Container>
  );
};

export default Posts;
