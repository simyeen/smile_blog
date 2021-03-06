import React, { useEffect } from "react";
import styled from "styled-components";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import Form from "../common/Form";
import Line from "../common/Line";
import Padding from "../common/Padding";

const EditorBlock = styled(Form)`
  height: 600px;
  @media only screen and (min-height: 800px) {
    height: 100%;
  }
`;

const TitleInput = styled.input`
  font-size: 2rem;
  outline: none;
  border: none;
  margin-bottom: 0.8rem;
  width: 100%;
`;

const QuillBox = styled.div`
  height: 100%;
`;

const Editor = ({ handleTitle, setDesc }) => {
  const placeholder = "글을 작성해 주세요.";

  const { quill, quillRef } = useQuill({
    placeholder,
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setDesc(quill.getText());
      });
    }
  }, [quill]);

  return (
    <>
      <EditorBlock>
        <TitleInput placeholder="제목을 입력해주세요." onChange={handleTitle} />
        <Line />
        <Padding height={3.2} />
        <QuillBox ref={quillRef} />
      </EditorBlock>
    </>
  );
};

export default Editor;
