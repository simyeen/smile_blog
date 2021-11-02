import React from "react";
import styled from "styled-components";
import Comment from "../../Components/write/Comment";

const CommnetContainerBlock = styled.div``;

const CommnetContainer = () => {
  return (
    <CommnetContainerBlock>
      <Comment />
    </CommnetContainerBlock>
  );
};

export default CommnetContainer;
