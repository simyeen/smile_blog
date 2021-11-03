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
      {postList.length === 0 && <p>아직 작성된 글이 없습니다.</p>}
      {postList.length !== 0 &&
        postList.map((post, idx) => {
          return <Post key={idx} post={post} />;
        })}
    </PostListBlock>
  );
};

export default PostList;
