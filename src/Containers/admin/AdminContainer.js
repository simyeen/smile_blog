import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AdminPresenter from "../../Components/admin/AdminPresenter";
import { postRef, allCommentsRef } from "../../firebase";

const AdminContainerBlock = styled.div``;

const AdminContainer = () => {
  const [postList, setPostList] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [toggle, setToggle] = useState(0);

  useEffect(() => {
    postRef.orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      const getList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPostList(getList);
    });

    allCommentsRef.orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      const getList = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setCommentList(getList);
    });
  }, []);

  const onToggle = (num) => setToggle(num);

  return (
    <AdminContainerBlock>
      <AdminPresenter
        {...{ postList }}
        {...{ commentList }}
        {...{ onToggle }}
        {...{ toggle }}
      />
    </AdminContainerBlock>
  );
};

export default AdminContainer;
