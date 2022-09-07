import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
`;

export const Table = styled.table`
  width: 1200px;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const Thead = styled.thead`
  background-color: #55608f;
`;

export const Tbody = styled.tbody``;

export const Th = styled.th`
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  text-align: left;
  padding: 2px 15px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    text-align: right;
  }
`;

export const Tr = styled.tr`
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:nth-child(odd) td {
    background: #eee;
  }
`;

export const Td = styled.td`
  text-align: left;
  padding: 4px 15px;

  &:last-child {
    text-align: right;
  }

  &:nth-child(3) {
    text-align: center;
  }

  & img {
    max-height: 50px;
    width: auto;
  }
`;
