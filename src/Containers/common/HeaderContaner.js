import React from "react";
import styled from "styled-components";
import Header from "../../Components/common/Header";

const HeaderContanerBlock = styled.div``;

const HeaderContaner = () => {
  const categories = [
    { link: "/", content: "홈" },
    { link: "/admin", content: "관리하기" },
    { link: "/write", content: "글 쓰기" },
  ];

  return (
    <HeaderContanerBlock>
      <Header {...{ categories }} />
    </HeaderContanerBlock>
  );
};

export default HeaderContaner;
