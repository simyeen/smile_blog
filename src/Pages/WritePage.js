import React from "react";
import HeaderContaner from "../Containers/common/HeaderContaner";
import EditorContainer from "../Containers/write/EditorContainer";
import { Helmet } from "react-helmet-async";

const WritePage = () => {
  return (
    <>
      <HeaderContaner />
      <EditorContainer />
    </>
  );
};

export default WritePage;
