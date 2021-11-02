import React from "react";
import PostButton from "../Components/write/PostButton";
import HeaderContaner from "../Containers/common/HeaderContaner";
import CommnetContainer from "../Containers/write/CommnetContainer";
import EditorContainer from "../Containers/write/EditorContainer";

const WritePage = () => {
  return (
    <>
      <HeaderContaner />
      <EditorContainer />
      <CommnetContainer />
      <PostButton />
    </>
  );
};

export default WritePage;
