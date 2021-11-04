import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import color from "../../lib/styles/color";
import Text from "../common/Text";

const PostBlock = styled.div`
  display: block;
  width: 300px;
  height: 300px;
  padding: 20px;
  margin-right: 1.6rem;
  margin-bottom: 1.6rem;
  border-radius: 10px;
  background-color: ${color.gray[50]};
  @media only screen and (max-width: 413px) {
    margin-right: 0;
  }
  cursor: pointer;
  &:hover {
    background-color: ${color.gray[100]};
  }
`;

const PostDate = styled.div``;

const PostDesc = styled.div``;

const Post = ({ post, history }) => {
  const onMove = () => {
    history.push(`/postView/${post.id}`);
  };

  const { title, date, desc } = post;

  return (
    <PostBlock onClick={onMove}>
      <PostDate>{date}</PostDate>
      <Text fontSize={25} style={{ marginTop: "3px", marginBottom: "2px" }}>
        {title.length < 17 ? `${title}` : `${title.slice(0, 17)}...`}
      </Text>
      <PostDesc>
        {desc.length < 150 ? `${desc}` : `${desc.slice(0, 150)}...`}
      </PostDesc>
    </PostBlock>
  );
};

export default withRouter(Post);
