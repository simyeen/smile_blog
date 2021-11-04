import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Form from "../../Components/common/Form";
import PostList from "../../Components/post/PostList";
import { postRef } from "../../firebase";

const PostListContainerBlock = styled(Form)``;

const PostListContainer = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    postRef.orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      const getList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(getList);
      setPostList(getList);
    });
    return () => setPostList([]);
  }, []);

  return (
    <PostListContainerBlock>
      <PostList {...{ postList }} />
    </PostListContainerBlock>
  );
};

export default PostListContainer;
