import React, { useEffect, useState, useRef } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

import styled from "styled-components";
import PostView from "../../Components/post/PostView";
import db from "../../firebase";

const PostViewContainerBlock = styled.div``;

const PostViewContainer = ({ match }) => {
  const [postId, setPostId] = useState();
  const [form, setForm] = useState({});
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState("");
  const [leng, setLeng] = useState(0);

  useEffect(() => {
    const { postId } = match.params;
    setPostId(postId);
    db.collection("post")
      .doc(postId)
      .onSnapshot((doc) => {
        setForm(doc.data());
        setComments(doc.data().comments);
      });
  }, []);

  const nextId = useRef(0);
  const onInset = (text) => {
    if (text === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    nextId.current = comments.length;
    console.log(nextId.current);
    const comment = {
      id: nextId.current,
      text,
    };
    setComments(comments.concat(comment));
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    onInset(value);
    setValue("");
    e.preventDefault();
  };

  return (
    <PostView
      {...{ form }}
      {...{ onSubmit }}
      {...{ onRemove }}
      {...{ onChange }}
      {...{ comments }}
      {...{ value }}
    />
  );
};

export default withRouter(PostViewContainer);
