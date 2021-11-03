import React from "react";
import styled from "styled-components";
import Padding from "./Padding";
import Text from "./Text";
import Responsive from "./Responsive";
import { NavLink } from "react-router-dom";
import color from "../../lib/styles/color";

const HeaderBlock = styled.div`
  position: fixed;
  z-index: 10;
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

const Category = styled(NavLink)`
  display: inline;
  margin-right: 20px;
  padding-bottom: 0.3rem;
  font-size: 1.2rem;
  font-weight: 500;
  &:hover {
    font-weight: 700;
  }

  &.active {
    color: ${color.orange};
    border-bottom: 2px solid ${color.orange};
  }
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 5px;
  margin-bottom: 10px;
`;

const Header = ({ categories }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <TitleDiv>
            <Text fontSize={32} fontWeight={1000}>
              스마일 블로그
            </Text>
            <Img src={process.env.PUBLIC_URL + "/favicon.ico"} />
          </TitleDiv>

          <Cotainer>
            {categories.map((c) => (
              <Category
                exact={c.content === "홈"}
                to={c.link}
                key={c.content}
                activeClassName="active"
              >
                {c.content}
              </Category>
            ))}
          </Cotainer>
        </Wrapper>
      </HeaderBlock>
      <Padding height={8} />
    </>
  );
};

export default Header;
