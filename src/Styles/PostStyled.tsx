import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: #343a40;
  font-size: 28px;
`;

export const SearchBox = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  margin-bottom: 20px;
  outline: none;
`;

export const PostList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
  color:rgb(12, 13, 13);
`;

export const PostItem = styled.li`
  background: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  font-size: 20px;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;
