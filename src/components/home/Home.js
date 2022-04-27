import Layout from '../../layout/Layout'
import {SearchBar, HomeNav, HomeNavLink, MostPopular} from './HomeStyles'
import Board from './Board'
// 페이지 로딩 시 모여봐요 표시
// 모여봐요 내에서 페이지 이동 (post 자세히 보기)

const Home = (props) => {

  return(
    <Layout>
      <HomeNav>
        <HomeNavLink>코오롱</HomeNavLink>
        <HomeNavLink>코오롱베니트</HomeNavLink>
      </HomeNav>
      <SearchBar placeholder={"어떤 내용이 궁금하신가요?"}></SearchBar>
      <MostPopular>가장 인기있는 글</MostPopular>
      <Board></Board>
    </Layout>
  )
}

export default Home;