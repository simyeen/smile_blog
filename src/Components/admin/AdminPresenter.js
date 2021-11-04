import React from "react";
import styled from "styled-components";
import Form from "../common/Form";
import Text from "../common/Text";
import Padding from "../common/Padding";

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

const AdminPresenter = ({ postList, commentList }) => {
  return (
    <AdminPresenterBlock>
      <Container>
        <Block>
          <Text>글 관리</Text>
          <Padding />
          <Text>댓글 관리</Text>
        </Block>
        <Block>
          {postList.map((post, idx) => (
            <p key={idx}>{post.title}</p>
          ))}

          {commentList.map((c, idx) => (
            <p key={idx}>{c.text}</p>
          ))}
        </Block>
      </Container>
    </AdminPresenterBlock>
  );
};

export default AdminPresenter;
