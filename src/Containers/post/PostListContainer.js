import React from "react";
import styled from "styled-components";
import PostList from "../../Components/post/PostList";

const PostListContainerBlock = styled.div``;

const PostListContainer = () => {
  return (
    <PostListContainerBlock>
      <PostList />
    </PostListContainerBlock>
  );
};

export default PostListContainer;
