import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Editor from "../../Components/write/Editor";
import PostButton from "../../Components/write/PostButton";
import { postRef, firebaseInstance } from "../../firebase";

const EditorContainerBlock = styled.div``;

const EditorContainer = ({ history, match }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [edifForm, setEditForm] = useState({ title: "제목시작", desc: "" });
  const { postId } = match.params;

  useEffect(() => {
    if (postId !== undefined) {
      setIsUpdate(true);
      postRef.doc(postId).onSnapshot((doc) => {
        setEditForm(doc.data());
      });
    }
  }, []);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const checkForm = (form) => {
    console.log("check");

    if (form.title === "" || form.desc === "") {
      alert("제목과 내용 모두 입력해주세요.");
      return false;
    }
    return true;
  };

  const onSubmit = async (e) => {
    const form = {
      title: title,
      desc: desc,
      date: new Date().toLocaleString(),
      timestamp: firebaseInstance.firestore.FieldValue.serverTimestamp(),
    };

    if (!checkForm(form)) return;
    const postConfirm = window.confirm("글을 작성하시겠습니까?");
    if (!postConfirm) return;

    e.preventDefault();
    console.log(form);

    if (isUpdate) {
      try {
        postRef.doc(postId).update({
          title: title,
          desc: desc,
        });
      } catch (error) {
        console.log("error발생", e);
      }
      history.push("/");
      return;
    }

    try {
      const data = await postRef.add(form).then((post) => {
        postRef
          .doc(post.id)
          .collection("comments")
          .doc(post.id)
          .set({ init: "commnetField" });
      });
      console.log(data);
      history.push("/");
    } catch (e) {
      console.log("error발생", e);
    }
  };

  const onCancel = () => {
    const form = { title: title, desc: desc };

    if (form.title !== "" || form.desc !== "") {
      const cancelConfirm = window.confirm(
        "아직 작성중인 내용이 있습니다. 정말 글 쓰기를 취소하시겠습니까?"
      );
      if (!cancelConfirm) return;
    }
    history.goBack();
  };

  return (
    <EditorContainerBlock>
      <Editor
        {...{ handleTitle }}
        {...{ setDesc }}
        {...{ isUpdate }}
        {...{ edifForm }}
      />
      <PostButton {...{ isUpdate }} {...{ onSubmit }} {...{ onCancel }} />
    </EditorContainerBlock>
  );
};

export default withRouter(EditorContainer);
