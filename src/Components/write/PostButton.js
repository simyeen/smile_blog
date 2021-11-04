import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import Form from "../common/Form";

const PostButtonBlock = styled(Form)`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled(Button)`
  &:hover {
    font-weight: 1000;
  }
`;

const PostButton = ({ onSubmit, onCancel, isUpdate }) => {
  return (
    <PostButtonBlock>
      <StyledButton onClick={onSubmit} hover>
        {isUpdate ? "글 수정하기" : "글 작성하기"}
      </StyledButton>
      <StyledButton onClick={onCancel}>취소하기</StyledButton>
    </PostButtonBlock>
  );
};

export default PostButton;
