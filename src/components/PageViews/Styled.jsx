import styled, { css } from "styled-components";

export const PageViews = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #f3f3f4;
  align-items: center;
  width: 60%;
`;

export const Top = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f3f3f4;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
`;

export const RightMenu = styled.div`
  display: flex;
  margin-right: 30px;
`;

export const MenuItem = styled.div`
  height: 60px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a7a7a7;
  font-weight: 400;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      border-bottom: 2px solid #1865bb;
      font-weight: 500;
      color: #000;
    `}

  &:nth-child(1) {
    margin-left: 0px;
  }
`;

export const GraphBlock = styled.div`
  display: flex;
  width: 95%;
  margin-top: 30px;
  margin-bottom: 30px;
  justify-content: center;
`;

export const PageViewss = styled.div``;
