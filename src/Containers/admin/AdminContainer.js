import React from "react";
import styled from "styled-components";
import AdminPresenter from "../../Components/admin/AdminPresenter";

const AdminContainerBlock = styled.div``;

const AdminContainer = () => {
  return (
    <AdminContainerBlock>
      <AdminPresenter />
    </AdminContainerBlock>
  );
};

export default AdminContainer;
