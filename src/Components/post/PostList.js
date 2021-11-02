import React from "react";
import styled from "styled-components";
import Post from "./Post";

const PostListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PostList = ({ postList }) => {
  return (
    <PostListBlock>
      {postList.map((post, idx) => {
        return <Post key={idx} post={post} />;
      })}
    </PostListBlock>
  );
};

export default PostList;
