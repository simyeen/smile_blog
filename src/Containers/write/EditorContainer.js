import React from "react";
import styled from "styled-components";
import Editor from "../../Components/write/Editor";

const EditorContainerBlock = styled.div``;

const EditorContainer = () => {
  return (
    <EditorContainerBlock>
      <Editor />
    </EditorContainerBlock>
  );
};

export default EditorContainer;
