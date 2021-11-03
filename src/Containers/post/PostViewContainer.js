import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

import styled from "styled-components";
import PostView from "../../Components/post/PostView";
import db from "../../firebase";

const PostViewContainerBlock = styled.div``;

const PostViewContainer = ({ match }) => {
  const [postId, setPostId] = useState();
  const [form, setForm] = useState({ title: "" });

  useEffect(() => {
    const { postId } = match.params;
    setPostId(postId);
    db.collection("post")
      .doc(postId)
      .onSnapshot((doc) => {
        setForm(doc.data());
      });
  }, []);

  return <PostView {...{ form }} />;
};

export default withRouter(PostViewContainer);
