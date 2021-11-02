import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";
import Form from "../../Components/common/Form";
import PostList from "../../Components/post/PostList";
import db from "../../firebase";

const PostListContainerBlock = styled(Form)``;

const PostListContainer = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    db.collection("post")
      .get()
      .then((docs) => {
        const getList = [];
        docs.forEach((doc) => getList.push(doc.data()));
        setPostList(getList);
      });
    console.log("post", postList);
  }, []);

  return (
    <PostListContainerBlock>
      <PostList {...{ postList }} />
    </PostListContainerBlock>
  );
};

export default PostListContainer;
