import React, { useEffect, useState, useRef } from "react";
import { withRouter } from "react-router-dom";

import styled from "styled-components";
import PostView from "../../Components/post/PostView";
import { postRef, firebaseInstance } from "../../firebase";

const PostViewContainerBlock = styled.div``;

const PostViewContainer = ({ match, history }) => {
  const [form, setForm] = useState({});
  const [postComments, setPostComments] = useState([]);
  const [value, setValue] = useState("");
  const { postId } = match.params;
  const commentRef = postRef.doc(postId).collection("comments");
  const nextId = useRef(0);
  let cnt = 0;

  // 댓글을 달 때마다 싥시간 렌더링 적용시키기.
  useEffect(() => {
    postRef.doc(postId).onSnapshot((doc) => {
      setForm(doc.data());
    });
    try {
      commentRef.orderBy("timestamp").onSnapshot((snapshot) => {
        const getList = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }));
        console.log(getList);
        nextId.current = getList.length;
        setPostComments(getList);
      });
    } catch (error) {
      console.log(error);
    }
  }, [cnt]);

  const onInsert = async (text) => {
    if (text === "") {
      alert("내용을 입력해주세요.");
      return;
    }
    console.log(nextId.current);
    const comment = {
      id: firebaseInstance.firestore.FieldValue.serverTimestamp(),
      text,
      date: new Date().toLocaleString(),
      timestamp: firebaseInstance.firestore.FieldValue.serverTimestamp(),
    };

    try {
      const data = await commentRef
        .doc(String(nextId.current))
        .set(comment)
        .then((doc) => console.log(doc));
    } catch (e) {
      console.log(e);
    }

    setPostComments(postComments.concat(comment));
    nextId.current += 1;
    cnt += 1;
  };

  const onRemove = async (id) => {
    const ok = window.confirm("메세지를 삭제하시겠습니까?");
    if (ok) {
      try {
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const data = await commentRef.doc(String(id)).delete();
    } catch (e) {
      console.log(e);
    }
    setPostComments(postComments.filter((c) => c.id !== id));
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = async (e) => {
    onInsert(value);
    setValue("");
    e.preventDefault();
  };

  const onPostRemove = async () => {
    const ok = window.confirm(
      "정말 글을 삭제하시겠습니까? 삭제시 복구할 수 없습니다."
    );
    if (ok) {
      history.goBack();
    }

    try {
      const data = await postRef.doc(postId).delete();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <PostView
        {...{ form }}
        {...{ onPostRemove }}
        {...{ onSubmit }}
        {...{ onRemove }}
        {...{ onChange }}
        {...{ postComments }}
        {...{ value }}
      />
    </>
  );
};

export default withRouter(PostViewContainer);
