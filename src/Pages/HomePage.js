import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderContaner from "../Containers/common/HeaderContaner";
import PostListContainer from "../Containers/post/PostListContainer";

const HomePage = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f5c21470a2a1fd83bbae45b685b323c7";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <>
      <HeaderContaner />
      {/* <PostListContainer /> */}
      <KakaoMap>안녕 나는 지도</KakaoMap>
    </>
  );
};

export default HomePage;

const KakaoMap = styled.div``;
