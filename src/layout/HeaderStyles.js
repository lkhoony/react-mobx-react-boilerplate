import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height : 80px;
  display : flex;
  padding : 50px 0 0 102px;
  border-bottom : 1px solid #F1F5F9;
`

export const LinkMenu = styled.div`
    display: flex;
    justify-content: space-around;
    overflow : hidden;
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