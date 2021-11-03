import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import color from "../../lib/styles/color";
import Text from "../common/Text";

const PostBlock = styled.div`
  display: block;
  width: 300px;
  height: 350px;
  margin-right: 1.6rem;
  margin-bottom: 1.6rem;
  @media only screen and (max-width: 413px) {
    margin-right: 0;
  }
  cursor: pointer;
`;

const PostImg = styled.img`
  width: 100%;
  height: 200px;
  background-color: ${color.gray[50]};
`;

const PostData = styled.div``;

const PostTitle = styled.div``;

const PostDesc = styled.div``;

const Post = ({ post, history }) => {
  const onMove = () => {
    history.push(`/postView/${post.id}`);
  };

  return (
    <PostBlock onClick={onMove}>
      <PostImg />
      {console.log(post)}
      <PostData>{post.date}</PostData>
      <Text>{post.title}</Text>
      <PostDesc dangerouslySetInnerHTML={{ __html: `${post.desc}` }}></PostDesc>
    </PostBlock>
  );
};

export default withRouter(Post);
