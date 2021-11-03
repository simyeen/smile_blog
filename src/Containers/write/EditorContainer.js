import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Editor from "../../Components/write/Editor";
import PostButton from "../../Components/write/PostButton";
import db from "../../firebase";

const EditorContainerBlock = styled.div``;

const EditorContainer = ({ history }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const checkForm = (form) => {
    console.log("check");

    if (form.title === "" || form.desc === "") {
      alert("제목과 내용 모두 입력해주세요.");
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    const form = {
      title: title,
      desc: desc,
      date: new Date().toLocaleString(),
      comments: [],
    };

    if (!checkForm(form)) return;
    const postConfirm = window.confirm("글을 작성하시겠습니까?");
    if (!postConfirm) return;

    console.log(form);
    db.collection("post")
      .add(form)
      .then((data) => {
        console.log("포스팅 성공", data);
        history.push("/");
      })
      .catch((e) => console.log("error발생", e));
  };

  const onCancel = () => {
    const form = { title: title, desc: desc };

    if (form.title !== "" || form.desc !== "") {
      const cancelConfirm = window.confirm(
        "아직 작성중인 내용이 있습니다. 정말 글 쓰기를 취소하시겠습니까?"
      );
      if (!cancelConfirm) return;
    }
    history.goBack();
  };

  return (
    <EditorContainerBlock>
      <Editor {...{ handleTitle }} {...{ setDesc }} />
      <PostButton {...{ onSubmit }} {...{ onCancel }} />
    </EditorContainerBlock>
  );
};

export default withRouter(EditorContainer);
