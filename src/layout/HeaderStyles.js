import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height : 80px;
  display : flex;
  padding : 50px 0 0 102px;
  border-bottom : 1px solid #F1F5F9;
  position : relative;
`

export const LinkMenu = styled.div`
    display: flex;
    justify-content: space-around;
    overflow : hidden;
    padding-right : 754px;
`

export const NavLinkWrap = styled.li`
  padding-right : 42px;
`

export const NavLink = styled.a`
    // width : 10%;
    // font-size: 16px;
    // line-height: 100px;
    // transition: 0.4s ease;
    color : ${({ isActive }) => (isActive ? '#191E29;' : '#AEB7C0')};
    border-bottom : ${({ isActive }) => (isActive ? '2px solid #191E29;' : '')};
    // &:hover {
    //     color: #9f9f9f;
    //     opacity: 1;
    //     cursor: pointer;
    // }
    
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    height : 100%;
    // color: #191E29;
    display : block;
`;

export const NotificationButton = styled.div`
  width: 32px;
  height: 32px;
  cursor : pointer;
  background : #AEB7C0;
`

export const NotificationMenu = styled.div`
  display : ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  width: 300px;
  left: 792px;
  top: 79px;
  padding : 12px 16px;
  background: #FFFFFF;
  border: 1px solid #F1F5F9;
  box-sizing: border-box;
  box-shadow: 0px 4px 40px rgba(117, 129, 141, 0.1);
  border-radius: 10px;
`

export const NotificationTitle = styled.div`
  font-size: 12px;
  line-height: 17px;
  /* identical to box height */
  padding-bottom : 6px;
  
  color: #AEB7C0;
`
