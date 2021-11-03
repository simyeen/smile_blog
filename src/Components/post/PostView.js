import React from "react";
import styled from "styled-components";
import color from "../../lib/styles/color";
import Form from "../common/Form";
import Text from "../common/Text";
import Button from "../common/Button";
import Padding from "../common/Padding";

const PostViewBlock = styled(Form)`
  height: 100vh;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const PostData = styled.div`
  color: ${color.gray[300]};
`;

const PostTitle = styled(Text)`
  text-align: left;
  margin-left: 0;
  margin-right: auto;
  font-size: 3rem;
`;

const PostDesc = styled.div``;

const CommentBlock = styled.div`
  border: 1px solid;
  background-color: ${color.gray[100]};
  padding: 15px 15px;
  border: none;
  border-radius: 8px;
`;

const StyledButton = styled(Button)`
  width: 100px;
  height: 30px;
`;

const CommentInput = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 16px;
`;

const PostView = ({ form }) => {
  const { title, desc, date } = form;

  return (
    <PostViewBlock>
      <Row>
        <PostTitle>{title}</PostTitle>
        <StyledButton>글 수정하기</StyledButton>
        <StyledButton>글 삭제하기</StyledButton>
      </Row>
      <PostData>{date} 작성</PostData>
      <Padding />
      <PostDesc dangerouslySetInnerHTML={{ __html: `${desc}` }}></PostDesc>
      <Padding height={3} />

      <PostTitle style={{ fontSize: "18px" }}>댓글을 달아주세요.</PostTitle>
      <Padding height={1} />
      <CommentBlock>
        <CommentInput placeholder="입력하기"></CommentInput>

        <Row>
          <StyledButton>등록하기</StyledButton>
        </Row>
      </CommentBlock>
    </PostViewBlock>
  );
};

export default PostView;
