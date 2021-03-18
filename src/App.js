import React from "react";
import * as Styled from "./App.style";

const App = () => {
  return (
    <>
      <Styled.GlobalStyle />
      <Styled.TotalContainer>
        <Styled.OptionBox>
          <Styled.OptionContainer>
            <p>Options</p>
            <i class='fas fa-chevron-down'></i>
          </Styled.OptionContainer>
          <Styled.OptionListContainer>
            <Styled.OptionList>
              <i class='far fa-edit'></i>
              <span>Edit</span>
            </Styled.OptionList>
            <Styled.OptionList>
              <i class='fas fa-clone'></i>
              <span>Duplicate</span>
            </Styled.OptionList>
            <Styled.OptionList>
              <i class='fas fa-archive'></i>
              <span>Archive</span>
            </Styled.OptionList>
            <Styled.OptionList>
              <i class='fas fa-arrow-alt-circle-right'></i>
              <span>Move</span>
            </Styled.OptionList>
            <Styled.OptionList>
              <i class='far fa-handshake'></i>
              <span>Share</span>
            </Styled.OptionList>
            <Styled.OptionList>
              <i class='fas fa-heart'></i>
              <span>Add to favorite</span>
            </Styled.OptionList>
            <Styled.OptionList>
              <i class='fas fa-trash-alt'></i>
              <span>Delete</span>
            </Styled.OptionList>
          </Styled.OptionListContainer>
        </Styled.OptionBox>
      </Styled.TotalContainer>
    </>
  );
};

export default App;
