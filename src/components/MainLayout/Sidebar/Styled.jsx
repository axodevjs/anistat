import styled, { css } from "styled-components";

export const Sidebar = styled.div`
  display: flex;
  width: 350px;
  min-height: 100vh;
  background-color: #ffffff;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
`;

export const Logo = styled.div`
  margin-top: 37px;
  margin-left: 15%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  color: #212e4a;
`;

export const Menu = styled.div`
  margin-top: 60px;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const Item = styled.div`
  height: 45px;
  cursor: pointer;
  width: calc(100% - 43px);
  border-radius: 7px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 43px;

  &:nth-child(1) {
    margin-top: 0;
  }

  ${(props) =>
    props.active &&
    css`
      background: #edf5fb;
      color: #1865bb;
    `}
`;

export const Icon = styled.div``;

export const Name = styled.div`
  margin-left: 14px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;

export const Sidebadr = styled.div``;
