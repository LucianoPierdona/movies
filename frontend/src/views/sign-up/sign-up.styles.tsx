import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  text-align: center;
`;

export const Label = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
`;

const inputStyles = css`
  display: block;
  margin: 10px 0;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #bbb;
  outline: none;
  font-size: 16px;
  width: 100%;
  max-width: 100%;

  &:focus {
    border-color: blue;
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const Droparea = styled.div`
  width: 100%;
  border: 1px dashed #ccc;
  position: relative;
  cursor: pointer;
  margin: 0 auto;

  & span {
    display: block;
    padding: 15px;
    font-style: italic;
    color: #666;
  }
`;

export const InputFileDiv = styled.div`
  text-align: center;
`;

export const InputFile = styled.input`
  display: none;
`;

export const InputFileLabel = styled.label`
  padding: 10px 10px;
  width: 150px;
  background-color: #999;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  display: block;
  margin: 15px auto;
  cursor: pointer;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  border: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 40px;
  padding: 15px 40px;
  background: #73a9fe;
  color: #fff;
  transition: all 0.3s ease;
  margin-top: 20px;

  &:hover {
    background: #295db0;
  }
`;

export const ClearButton = styled.button`
  display: block
  margin: 0 auto;
  border: none;
  cursor: pointer;
  padding: 5px 5px;
  width: 150px;
  background-color: #333;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  background: #ccc;
  transition: all .3s ease;
  margin-top: 12px;

  &:hover {
    background: #aaa;
  }
`;

export const Select = styled.select`
  ${inputStyles}
`;

export const Preview = styled.div`
  text-align: center;
`;

export const Img = styled.img`
  display: block;
  margin: 0 auto;
  max-height: 100px;
  width: auto;
  text-align: center;
`;
