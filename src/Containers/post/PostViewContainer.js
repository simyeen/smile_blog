import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PostView from "../../Components/post/PostView";
import { postRef, firebaseInstance } from "../../firebase";

const PostViewContainer = ({ match, history }) => {
  const [form, setForm] = useState({});
  const [postComments, setPostComments] = useState([]);
  const [value, setValue] = useState("");
  const [cid, setCid] = useState("");
  const { postId } = match.params;

  const commentRef = postRef.doc(postId).collection("comments");
  let trigger = 0;

  // 댓글을 달 때마다 싥시간 렌더링 적용시키기.
  useEffect(() => {
    postRef.doc(postId).onSnapshot((doc) => {
      setForm(doc.data());
    });
    try {
      commentRef.doc(postId).onSnapshot((doc) => {
        setCid(doc.data());
      });

      commentRef.orderBy("timestamp").onSnapshot((snapshot) => {
        const getList = snapshot.docs.map((doc) => ({
          ...doc.data(),
        }));

        setPostComments(getList);
      });
    } catch (error) {
      console.log(error);
    }

    return () => {
      setPostComments([]);
    };
  }, [trigger]);

  const onInsert = async (text) => {
    if (text === "") {
      alert("내용을 입력해주세요.");
      return;
    }

    const newId = cid["cnt"] + 1;
    console.log("newId", newId);
    const comment = {
      id: newId,
      text,
      date: new Date().toLocaleString(),
      timestamp: firebaseInstance.firestore.FieldValue.serverTimestamp(),
    };

    try {
      await commentRef.doc(String(newId)).set(comment);
      await commentRef.doc(postId).update({ cnt: newId });
    } catch (e) {
      console.log(e);
    }
    trigger += 1;
    setPostComments(postComments.concat(comment));
  };

  const onRemove = async (id) => {
    const ok = window.confirm("댓글 삭제하시겠습니까?");
    if (!ok) return;

    try {
      await commentRef.doc(String(id)).delete();
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

  const onEdit = () => {
    history.push(`/write/${postId}`);
  };

  const onPostRemove = async () => {
    const ok = window.confirm(
      "정말 글을 삭제하시겠습니까? 삭제하면 복구할 수 없습니다."
    );
    if (ok) {
      history.goBack();
      try {
        await postRef.doc(postId).delete();
      } catch (e) {
        console.log(e);
      }
    }
  };

  // unmounting setForm
  useEffect(() => {
    return () => {
      setForm({});
    };
  }, []);

  return (
    <>
      <PostView
        {...{ form }}
        {...{ onPostRemove }}
        {...{ onEdit }}
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
