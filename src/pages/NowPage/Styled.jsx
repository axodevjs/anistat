import styled, { css } from "styled-components";

export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
`;

export const Row = styled.div`
  width: calc(100% - 62px);
  padding: 17px 31px;
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div`
  width: ${({ width }) => width || ""};
  height: auto;

  ${(props) =>
    props.bold &&
    css`
      font-weight: 500;
    `}
`;

export const Wrapper1d = styled.div``;
