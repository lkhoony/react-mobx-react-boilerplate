import react, {useState} from 'react'
import {
  HeaderContainer,
  LinkMenu,
  NavLink,
  NavLinkWrap,
  NotificationButton,
  NotificationMenu,
  NotificationTitle
} from './HeaderStyles'
import NotificationMessage from './NotificationMessage';

import Link from 'next/link';
import { useRouter } from 'next/router';

const menus = [
  { id : 'menu1', name : '소통해요', path : '/home'},
  { id : 'menu2', name : '모여봐요', path : '/group'}
];

const Header = (props) => {

  const router = useRouter();
  const [openNotification, setOpenNotification] = useState(false);

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

  const onClickNotification = (e) => {
    setOpenNotification(!openNotification);
  }

  return(
    <HeaderContainer>
      <LinkMenu>
        {createMenus(menus)}
      </LinkMenu>
      <NotificationButton onClick={onClickNotification} />
      <NotificationMenu open={openNotification}>
        <NotificationTitle>알림</NotificationTitle>
        <NotificationMessage>test</NotificationMessage>
        <NotificationMessage>test</NotificationMessage>
        <NotificationMessage>test</NotificationMessage>
        <NotificationMessage>test</NotificationMessage>
        <NotificationMessage>test</NotificationMessage>
        <NotificationMessage>test</NotificationMessage>

      </NotificationMenu>
    </HeaderContainer>
  )
}

export default Header