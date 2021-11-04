import React, { useState } from "react";
import styled, { css } from "styled-components";
import Form from "../common/Form";
import Text from "../common/Text";
import Padding from "../common/Padding";
import color from "../../lib/styles/color";
import AdminPost from "./AdminPost";
import AdminCommnet from "./AdminCommnet";

const AdminPresenterBlock = styled(Form)``;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Block = styled.div`
  width: 30%;
  border-right: 1px solid;
`;

const StyledText = styled(Text)`
  &:hover {
    font-weight: 800;
  }
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      font-weight: 800;
    `}
`;

const Col = styled.div`
  flex-direction: column;
`;

const AdminPresenter = ({ postList, commentList, onToggle, toggle }) => {
  return (
    <AdminPresenterBlock>
      <Container>
        <Block>
          <Padding />
          <StyledText
            active={toggle === 0}
            onClick={() => {
              onToggle(0);
            }}
          >
            글 관리
          </StyledText>
          <Padding />
          <StyledText
            active={toggle === 1}
            onClick={() => {
              onToggle(1);
            }}
          >
            댓글 관리
          </StyledText>
        </Block>
        <Col>
          {console.log(postList)}
          {console.log(commentList)}

          {toggle === 0 &&
            postList.map((post, idx) => <AdminPost key={idx} {...{ post }} />)}

          {toggle === 1 &&
            commentList.map((comment, idx) => (
              <AdminCommnet key={idx} {...{ comment }} />
            ))}
        </Col>
      </Container>
    </AdminPresenterBlock>
  );
};

export default AdminPresenter;
