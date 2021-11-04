import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AdminPresenter from "../../Components/admin/AdminPresenter";
import { postRef } from "../../firebase";

const AdminContainerBlock = styled.div``;

const AdminContainer = () => {
  const [postList, setPostList] = useState([]);
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    postRef.orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      const getList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPostList(getList);
    });
  }, []);

  const test = () => {
    postList.map((post) => {
      console.log(post);
      postRef
        .doc(post.id)
        .collection("comments")
        .onSnapshot((snapshot) => {
          const arr = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setCommentList(commentList.concat(arr));
        });
    });
  };

  return (
    <AdminContainerBlock>
      <AdminPresenter {...{ postList }} {...{ commentList }} />
      <button onClick={test}>버튼</button>
    </AdminContainerBlock>
  );
};

export default AdminContainer;
