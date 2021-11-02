import React from "react";
import styled from "styled-components";
import Editor from "../../Components/write/Editor";

const WriteContainerBlock = styled.div``;

const WriteContainer = () => {
  return (
    <WriteContainerBlock>
      <Editor />
    </WriteContainerBlock>
  );
};

export default WriteContainer;
