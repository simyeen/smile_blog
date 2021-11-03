import React from "react";
import styled from "styled-components";
import Padding from "./Padding";
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

const Header = ({ categories }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <h1>스마일 블로그 😁</h1>
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
