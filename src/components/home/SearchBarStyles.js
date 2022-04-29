import styled from 'styled-components';

export const SearchBarContainer = styled.div` 

  width: 990px;
  height: 62px;
  background: #F6F7FA;
  border-radius: 10px;
  position : relative;
`

export const SearchBarInput = styled.input`

  width: 100%;
  height : 100%;

  background: #F6F7FA;
  border-radius: 10px;
  border : none;
  outline : none;
  
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

export const SearchButtonWrap = styled.div`
  position : absolute;
`

export const KeywordMenu = styled.div`
  position: absolute;
  width: 990px;
  height: 138px;
  // left: 465px;
  top: 72px;
  
  display : ${({isOpen})=>isOpen ? 'block' : 'none'};
  background: #FFFFFF;
  border: 1px solid #F1F5F9;
  box-sizing: border-box;
  box-shadow: 0px 4px 40px rgba(117, 129, 141, 0.1);
  border-radius: 10px;
  padding : 20px 22px;
`

export const KeywordMenuHeader = styled.div`
  position : relative;
  padding-bottom : 10px;
`

export const KeywordTitle = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #AEB7C0;
`

export const KeywordDeleteAllButton = styled.div`
  position : absolute;
  font-size: 12px;
  line-height: 17px;
  text-align: right;
  
  color: #AEB7C0;
  right : 22px;
  top : 0px;
  
  cursor : pointer;
`

export const KeywordsContainer = styled.div`
  display : flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`
