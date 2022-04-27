import React, {useState} from 'react'
import { Container, Contents, Body } from './LayoutStyles'
import Header from './Header'
import SideBar from './SideBar'

const Layout = ({children}) => {

  const [isShown, setIsShown] = useState(false);

  const toggleHeader = () => {
    setIsShown(!isShown);
  }

  return (
    <Container>
      <SideBar />
      <Contents isShown={isShown}>
        <Header />
        <Body>
          {children}
        </Body>
      </Contents>
    </Container>
  )
}

export default Layout