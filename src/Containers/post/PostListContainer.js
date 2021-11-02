import React from "react";
import styled from "styled-components";
import Form from "../../Components/common/Form";
import PostList from "../../Components/post/PostList";

const PostListContainerBlock = styled(Form)``;

const PostListContainer = () => {
  return (
    <PostListContainerBlock>
      <PostList />
    </PostListContainerBlock>
  );
};

export default PostListContainer;
