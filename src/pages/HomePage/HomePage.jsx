import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import PageViews from "../../components/PageViews/PageViews";
import { Col, Row, Table } from "./Styled";

const HomePage = () => {
  return (
    <div>
      <MainLayout title="Главная">
        <PageViews />
      </MainLayout>
    </div>
  );
};

export default HomePage;
