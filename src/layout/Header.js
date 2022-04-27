import react, {useState} from 'react'
import { HeaderContainer, LinkMenu, NavLink, NavLinkWrap } from './HeaderStyles'
import Link from 'next/link';
import { useRouter } from 'next/router';

const menus = [
  { id : 'menu1', name : '소통해요', path : '/home'},
  { id : 'menu2', name : '모여봐요', path : '/group'}
];

const Header = (props) => {

  const router = useRouter();

  const createMenus = (menus) => {

    return menus.map((menu,index)=>{
      return(
        <NavLinkWrap>
          <Link href={menu.path}>
            <NavLink key={index} isActive={ router.pathname.includes(menu.path) ? true : false }>{menu.name}</NavLink>
          </Link>
        </NavLinkWrap>
      )
    })

  }
  return(
    <HeaderContainer>
      <LinkMenu>
        {/*<li>*/}
        {/*  <Link href={"/about"}>*/}
        {/*    <NavLink>소통해요</NavLink>*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link href={"/about"}>*/}
        {/*    <NavLink>모여봐요</NavLink>*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {createMenus(menus)}
      </LinkMenu>
    </HeaderContainer>
  )
}

export default Header