import Layout from '../src/layout/Layout'
const OnBoardingPage = (props) => {

  console.log(props);

  return(
    // <Layout>onboarding</Layout>
    <div>
      onbarding
    </div>
  )
}

// 빌드와 상관없이 매 요청마다 데이터를 서버로 부터 가져옴
export const getServerSideProps = async (ctx) => {

  console.log(Object.keys(ctx));

  const cookieReq = ctx.req ? ctx.req.headers.cookie : null;
  console.log(cookieReq);

  // 데이터를 넘길 때는 아래 형식으로
  return {
    props : {
      title : "Test"
    }
  }
}

export default OnBoardingPage;