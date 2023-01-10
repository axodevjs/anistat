import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;

  color: #212e4a;
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

export const Input = styled.input`
  background: #f4f4f4;
  outline: none;
  border: none;
  border-radius: 5px;
  height: 49px;
  padding: 0 13px;
  width: 300px;
  margin-top: 9px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color: #212e4a;
`;

export const Label = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  color: #212e4a;
`;

export const Button = styled.div`
  background: #1483ff;
  border-radius: 7px;
  height: 44px;
  padding: 0 42px;
  cursor: pointer;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  color: #ffffff;
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const Error = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  color: #ef6c6c;
  margin-top: 10px;
`;

export const Inpudt = styled.div``;
