import React from "react";
import styled from "styled-components";

const PostBlock = styled.div`
  display: block;
  width: 300px;
  height: 350px;
  margin-right: 1.6rem;
  margin-bottom: 1.6rem;
  @media only screen and (max-width: 413px) {
    margin-right: 0;
  }
`;

const PostImg = styled.img`
  width: 100%;
  height: 200px;
`;

const PostData = styled.div``;

const PostTitle = styled.div``;

const PostDesc = styled.div``;

const Post = ({ post }) => {
  return (
    <PostBlock>
      <PostImg />
      {console.log(post)}
      <PostData>{post.date}</PostData>
      <PostTitle>{post.title}</PostTitle>
      <PostDesc>{post.desc}</PostDesc>
    </PostBlock>
  );
};

export default Post;
