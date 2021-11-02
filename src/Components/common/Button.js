import React from "react";
import styled, { css } from "styled-components";
import color from "../../lib/styles/color";

import { Link } from "react-router-dom";

const buttonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;

  outline: none;
  border: none;
  border-radius: 8px;
  color: ${color.black};

  background: ${color.orange};

  font-weight: 700;
  font-stretch: normal;
  line-height: 1.4;
  letter-spacing: -0.4px;
  text-align: center;

  cursor: pointer;

  ${(props) =>
    props.full &&
    css`
      border-radius: 0px;

      font-weight: 500;
    `}

  ${(props) =>
    props.white &&
    css`
      border: 1px solid ${color.gray[200]};
      background: ${color.white};
      color: black;
    `}

    ${(props) =>
    props.closed &&
    css`
      background: ${color.gray[100]};
      color: ${color.gray[200]};

      font-weight: 500;
    `}

    ${(props) =>
    props.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `}

    ${(props) => props.fontSize && css``}

    ${(props) =>
    props.hover &&
    css`
      background: ${color.orange5};
      border: 2px solid ${color.orange};
      font-weight: 700;
    `}
    
    ${(props) =>
    props.active &&
    css`
      color: ${color.black};
      background: ${color.orange5};
      border: 2px solid ${color.orange};
      font-weight: 700;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;
const Button = (props) => {
  return props.to ? (
    <StyledLink
      {...props}
      white={props.white ? 1 : 0}
      closed={props.closed ? 1 : 0}
      full={props.full ? 1 : 0}
      hover={props.hover ? 1 : 0}
      active={props.active ? 1 : 0}
    />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
