import React from "react";
import styled from "styled-components";

const ResponsiveBlock = styled.div`
  padding-left: 3.2rem;
  width: 100%;

  @media (max-width: 262px) {
    html {
      font-size: 10px;
    }
  }
  @media (min-width: 263px) and (max-width: 300px) {
    html {
      font-size: 11px;
    }
  }
  @media (min-width: 301px) and (max-width: 337px) {
    html {
      font-size: 12px;
    }
  }
  @media (min-width: 338px) and (max-width: 375px) {
    html {
      font-size: 13px;
    }
  }
  @media (min-width: 376px) and (max-width: 412px) {
    html {
      font-size: 14px;
    }
  }
  @media (min-width: 413px) and (max-width: 450px) {
    html {
      font-size: 15px;
    }
  }
  @media (min-width: 451px) {
    html {
      font-size: 16px;
    }
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
