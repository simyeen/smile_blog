import React from "react";
import styled from "styled-components";
import color from "../../lib/styles/color";
import Form from "../common/Form";
import Text from "../common/Text";
import Button from "../common/Button";
import Padding from "../common/Padding";

const PostViewBlock = styled(Form)``;

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  background-color: ${color.gray[100]};
  padding: 15px 15px;
  border: none;
  border-radius: 8px;
`;

const StyledButton = styled(Button)`
  width: 120px;
  height: 50px;
  border-radius: 10px;
`;

const RemoveButton = styled(Button)`
  font-size: 1rem;
  margin: 0;
  padding: 0px;
  width: 45px;
  height: 30px;
`;

const CommentInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: none;
  outline: none;
`;

const CommentBox = styled.div`
  width: 100%;
  background-color: ${color.orange5};
`;

const CommentRow = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  border-radius: 5px;
`;

const PostView = ({
  form,
  value,
  onEdit,
  postComments,
  onPostRemove,
  onSubmit,
  onRemove,
  onChange,
}) => {
  const { title, desc, date } = form;

  return (
    <PostViewBlock>
      <Row>
        {form && <PostTitle>{title}</PostTitle>}
        <StyledButton onClick={onEdit}>수정하기</StyledButton>
        <StyledButton onClick={onPostRemove}>삭제하기</StyledButton>
      </Row>
      {form && <PostData>{date} 작성</PostData>}
      <Padding />
      {form && (
        <PostDesc dangerouslySetInnerHTML={{ __html: `${desc}` }}></PostDesc>
      )}
      <Padding height={3} />
      <PostTitle style={{ fontSize: "18px", marginLeft: "5px" }}>
        댓글을 달아주세요!
      </PostTitle>
      <Padding height={3} />
      <CommentBlock>
        <CommentInput
          value={value}
          placeholder="입력하기"
          onChange={onChange}
        ></CommentInput>
        {postComments.map((c, idx) => {
          return (
            <CommentBox key={idx}>
              <CommentRow>
                <Text fontSize={16}>{c.text}</Text>
                <RemoveButton
                  onClick={() => {
                    onRemove(c.id);
                  }}
                >
                  삭제
                </RemoveButton>
              </CommentRow>
            </CommentBox>
          );
        })}
        <Padding height={7} />
        <Row>
          <StyledButton onClick={onSubmit}>등록하기</StyledButton>
        </Row>
      </CommentBlock>
    </PostViewBlock>
  );
};

export default PostView;
