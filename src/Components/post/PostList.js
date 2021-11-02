import React from "react";
import styled from "styled-components";
import Post from "./Post";

const PostListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PostList = () => {
  const dummys = [1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 1, 1];

  return (
    <PostListBlock>
      {dummys.map((item) => {
        return (
          <>
            {item}
            <Post />
          </>
        );
      })}
    </PostListBlock>
  );
};

export default PostList;
