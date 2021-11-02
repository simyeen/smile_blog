import React from "react";
import styled from "styled-components";
import Padding from "./Padding";
import Button from "./Button";
import Text from "./Text";
import Responsive from "./Responsive";
import { Link } from "react-router-dom";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 8rem;
  display: flex;
  flex-direction: column;
`;

const Cotainer = styled.div`
  display: flex;
`;

const MoveText = styled.p`
  display: inline;
  margin-right: 10px;
  font-weight: 500;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <h1>스마일 블로그 😁</h1>
          <Cotainer>
            <Link to="/">
              <MoveText>홈</MoveText>
            </Link>
            <Link to="/write">
              <MoveText>글 쓰기</MoveText>
            </Link>
            <Link to="/admin">
              <MoveText>관리하기</MoveText>
            </Link>
          </Cotainer>
        </Wrapper>
      </HeaderBlock>
      <Padding height={8} />
    </>
  );
};

export default Header;
