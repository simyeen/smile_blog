import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import color from "../../lib/styles/color";

const TitleBlock = styled.div`
  flex-direction: column;
  padding: 10px;
  width: 200px;
  height: 70px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${color.gray[50]};
`;
const AdminCommnet = ({ comment, history }) => {
  const { frKey, id, text } = comment;
  const onMove = () => {
    history.push(`/postView/${frKey}`);
  };
  return <TitleBlock onClick={onMove}>{text} </TitleBlock>;
};

export default withRouter(AdminCommnet);
