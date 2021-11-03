import React from "react";
import styled from "styled-components";
import HeaderContaner from "../Containers/common/HeaderContaner";
import PostViewContainer from "../Containers/post/PostViewContainer";

const PostViewPageBlock = styled.div``;

const PostViewPage = () => {
  return (
    <>
      <HeaderContaner />
      <PostViewContainer />;
    </>
  );
};

export default PostViewPage;
