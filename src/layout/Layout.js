import React, {useState} from 'react'
import { Container, Contents } from './LayoutStyles'
import { SideBar, Header } from '../components/presentationals'

const Layout = ({children}) => {

  const [isShown, setIsShown] = useState(false);

  const toggleHeader = () => {
    setIsShown(!isShown);
  }

  return (
    <Container>
      <SideBar/>
      <Contents isShown={isShown}>
        <Header/>
        {children}
      </Contents>
    </Container>
  )
}

export default Layout