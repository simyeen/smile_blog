import React, { useEffect, useState } from "react";
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
        docs.forEach((doc) => {
          getList.push({ ...doc.data(), id: doc.id });
        });
        getList.sort((a, b) => {
          const regex = /[^0-9]/g;
          let one = a.date.replace(regex, "");
          let two = b.date.replace(regex, "");
          return parseInt(two) - parseInt(one);
        });
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
