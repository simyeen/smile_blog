import React from "react";
import styled, { css } from "styled-components";
import color from "../../lib/styles/color";

const StyledForm = styled.div`
  max-width: 100%;
  padding: 1.6rem 3.2rem;
  background: ${color.white};
  display: flex;
  flex-direction: column;

  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `};
`;

const Form = ({ children, ...rest }) => {
  return <StyledForm {...rest}>{children}</StyledForm>;
};

export default Form;
