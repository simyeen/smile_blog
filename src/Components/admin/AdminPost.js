import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import color from "../../lib/styles/color";

const AdminPostBlock = styled.div``;

const TitleBlock = styled.div`
  flex-direction: column;
  padding: 10px;
  width: 300px;
  height: 70px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${color.gray[50]};
`;
const AdminPost = ({ post, history }) => {
  const onMove = () => {
    history.push(`/postView/${post.id}`);
  };
  return (
    <TitleBlock onClick={onMove}>
      {post.title.length < 15
        ? `${post.title}`
        : `${post.title.slice(0, 15)}...`}{" "}
    </TitleBlock>
  );
};

export default withRouter(AdminPost);
