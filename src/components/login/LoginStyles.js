import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  width : 100vw;
  height : 100vh;
  display : flex;
  align-items : center;
`
export const LoginWrap = styled.div`
  width : 400px;
  height : 500px;
  margin : 0 auto;
  background : red;
  text-align : center;
`

export const LogoWrap = styled.div`
  width : 200px;
  height : 100px;
  background : yellow;
`

export const LoginFormWrap = styled.div`
  
`

export const LoginButton = styled.button`
  background : ${({ isDisabled }) => (isDisabled ? 'white' : 'gray')};
  width : 200px;
  margin : 0 auto;
  cursor : pointer;
  border : none;
  pointer-events : ${({ isDisabled }) => (isDisabled ? 'none' : '')};
`