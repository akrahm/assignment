import { useEffect, useState } from "react";
import styled from "styled-components";
import { IPost } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { selectedPostSelector } from "../redux/posts/selectors";
import { useLocation, useNavigate } from "react-router";
import { setSelectedPost } from "../redux/posts/reducer";
import {
  Button,
  Card,
  Container,
  Text,
  Title,
} from "../styles/PostDetailStyled";

const PostDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postId = location?.pathname?.split("/")[2];
  const selectedPost = useSelector(selectedPostSelector);

  const fetchPost = async () => {
    if (selectedPost === null && !!postId) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const post = await response.json();
      if (post) {
        dispatch(setSelectedPost(post));
      } else return;
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Container>
      <Card>
        <Title>Post Details</Title>
        <Text>
          <strong>Title:</strong> {selectedPost?.title || ""}
        </Text>
        <Text>
          <strong>Summary:</strong> {selectedPost?.body || ""}
        </Text>
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </Card>
    </Container>
  );
};

export default PostDetail;
