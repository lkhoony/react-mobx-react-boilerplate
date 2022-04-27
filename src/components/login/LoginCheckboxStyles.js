import styled from 'styled-components'

export const CheckboxWrap = styled.div`
  width : 100%;
`

export const CheckboxLabel = styled.div`
  display : inline-block;
  height : 20px;
  vertical-align : top;
`

export const CheckboxInput = styled.input`
  display : none;
`

export const CheckboxImage = styled.div`
  background : ${({ isChecked }) => (isChecked ? 'blue' : 'orange')};
  width : 20px;
  height : 20px;
  display : inline-block;
  vertical-align : top;
  cursor : pointer;
`