import Styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  margin:0px;
  padding:0;
  box-sizing:border-box;
`;

export const TotalContainer = Styled.div`
  display:flex;
  justify-content:center;
`;

export const OptionBox = Styled.div`
  position:relative;
`;

export const OptionContainer = Styled.div`
  height:30px;
  display:flex;
  align-items:center;
  border:1px solid lightgray;
  border-radius:5px;
  padding:0 10px;
  cursor:pointer;
  transition:.1s linear;

  &:hover {
    box-shadow:0 0 3px 2px lightblue;
  }

  p {
    font-size:12px;
    margin-right:10px;
    font-weight:700;
    color:gray;
  }

  i {
    color:gray;
    font-size:10px;
  }
`;

export const OptionListContainer = Styled.div`
  position:absolute;
  width:180px;
  left:-90px;
  top:35px;
  border:1px solid lightgray;
  border-radius:5px;  
  transition:.2s linear;
  opacity:${({ toggle }) => !toggle && "0"};
`;

export const OptionList = Styled.div`
  display:flex;
  align-items:center;
  padding:8px;

  &:nth-child(2n){
    border-bottom:1px solid lightgray;
  }

  i {
    color:gray;
    font-size:12px;
  }

  span {
    font-size:12px;
    margin-right:10px;
    font-weight:700;
    color:gray;
  }
`;
