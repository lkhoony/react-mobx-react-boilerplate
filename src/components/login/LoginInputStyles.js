import styled from 'styled-components'

export const InputWrap = styled.div`
  width : 100%;
  background : green;
  border-radius : 50px;
  position : relative;
  height : 30px;
  box-sizing : border-box;
  border: ${({ isFocus }) => (isFocus ? '1px solid black' : '0px')};
   
`

export const InputFiled = styled.input`
  display : inline-block;
  vertical-align : top;
  position : absolute;
  height : 30px;
  padding-left : 10px;
  margin : 0px;
  border : none;
  width : 100%;
  outline : none;
  background : transparent;
  left : 0;
  box-sizing : border-box;
`

export const ClearButton = styled.div`
  display : ${({ isDisplay }) => (isDisplay ? 'inline-block' : 'none')};
  vertical-align : top;
  position : absolute;
  background : blue;
  width : 30px;
  height : 30px;
  right : 10px;
  cursor : pointer;
`