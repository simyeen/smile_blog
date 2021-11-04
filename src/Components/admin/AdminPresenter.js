import React from "react";
import styled from "styled-components";
import Form from "../common/Form";
import Padding from "../common/Padding";

const AdminPresenterBlock = styled(Form)``;

const AdminPresenter = ({ postList, commentList }) => {
  return (
    <AdminPresenterBlock>
      <div>글 관리</div>
      {postList.map((post, idx) => (
        <p key={idx}>{post.title}</p>
      ))}
      <Padding />
      <div>댓글 관리</div>
      {commentList.map((c) => (
        <p>{c.text}</p>
      ))}
    </AdminPresenterBlock>
  );
};

export default AdminPresenter;
