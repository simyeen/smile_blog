import React from "react";
import styled from "styled-components";
import PostButton from "../../Components/write/PostButton";

const PostButtonContainerBlock = styled.div``;

const PostButtonContainer = () => {
  return (
    <PostButtonContainerBlock>
      <PostButton />
    </PostButtonContainerBlock>
  );
};

export default PostButtonContainer;
