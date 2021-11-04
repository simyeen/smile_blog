import React from "react";
import styled from "styled-components";
import Text from "../common/Text";
import Post from "./Post";

const PostListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PostCount = styled(Text)`
  margin-bottom: 20px;
  margin-left: 20px;
`;

const PostList = ({ postList }) => {
  return (
    <>
      <PostCount fontSize={25}>전체 글 {postList.length} </PostCount>
      <PostListBlock>
        {postList.length === 0 && (
          <Text fontSize={30}>아직 작성된 글이 없습니다.</Text>
        )}
        {postList.length !== 0 &&
          postList.map((post, idx) => {
            return <Post key={idx} post={post} />;
          })}
      </PostListBlock>
    </>
  );
};

export default PostList;
