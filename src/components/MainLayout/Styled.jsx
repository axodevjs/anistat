import styled from "styled-components";

export const MainLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 80vh;
  background-color: #f6f8fa;
`;

export const Content = styled.div`
  width: calc(100% - 98px);
  display: flex;
  flex-direction: column;
  padding: 44px 49px;
`;

export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
`;

export const ContentInner = styled.div`
  margin-top: 39px;
  width: 100%;
`;

export const Sidebadr = styled.div``;
