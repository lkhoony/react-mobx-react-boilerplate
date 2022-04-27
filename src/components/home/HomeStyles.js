import styled from 'styled-components'

export const HomeNav = styled.div`
  padding : 38px 0 20px 0;
  display : flex;
  
`

export const HomeNavLink = styled.div`
  font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 35px;

color: #191E29;
padding-right : 35px;
`

export const SearchBar = styled.input`
  width: 990px;
  height: 62px;

  background: #F6F7FA;
  border-radius: 10px;
  border : none;
  outline : none;
  
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height */
  
  padding-left : 22px;
  color: #AEB7C0;
  
  ::placeholder {
    color: #AEB7C0;
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
   color: #AEB7C0;
  }
  
  ::-ms-input-placeholder { /* Microsoft Edge */
   color: #AEB7C0;
  }
`

export const MostPopular = styled.div`
  padding : 51px 0 10px 0;
  font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 35px;
/* identical to box height */


color: #191E29;
`