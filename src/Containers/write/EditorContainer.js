import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";
import Comment from "../../Components/write/Comment";
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

  const onSubmit = () => {
    const form = { title: title, desc: desc };
    console.log(form);
    db.collection("post")
      .add(form)
      .then((data) => {
        console.log("포스팅 성공");
        history.push("/");
      })
      .catch((e) => console.log("error발생", e));
  };

  return (
    <EditorContainerBlock>
      <button onClick={onSubmit}>버튼</button>
      <Editor {...{ handleTitle }} {...{ setDesc }} />
    </EditorContainerBlock>
  );
};

export default withRouter(EditorContainer);
