import styled from 'styled-components'

export const SideBarContainer = styled.div`

  height : 100%;
  width: 313px;
  position : fixed;
  padding : 50px 0 0 50px;
  border-right : 1px solid #F1F5F9;
  
`

export const ProfileWrap = styled.div`
  display : flex;
`

export const ProfileSection = styled.div`
  
`

export const ProfileImg = styled.img`
  width : 44px;
  height : 44px;
`

export const ProfileName = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  align-items: center;
  
  color: #191E29;
  padding-left : 10px;

`

export const ProfileDpt = styled.div`
  font-family: 'Noto Sans KR';
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 17px;
/* identical to box height */

padding-left : 10px;
color: #AEB7C0;
`

export const GroupWrap = styled.div`
  padding-top : 50px;
`

export const GroupTitle = styled.div`
  font-family: 'Noto Sans KR';
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 20px;

color: #AEB7C0;
padding-bottom : 22px;
`

export const GroupList = styled.div`
  font-family: 'Noto Sans KR';
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 23px;
display: flex;
align-items: center;

color: #191E29;
padding-bottom : 22px;

`