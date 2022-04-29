import Home from '../../src/components/home/Home'

const HomePage = (props) => {

  return(
    <Home></Home>
  )

}

export const getServerSideProps = async (ctx) => {

  console.log(Object.keys(ctx));
  console.log(ctx.query);

  // receiveResponse(ctx.query, "/test");

  const cookieReq = ctx.req ? ctx.req.headers.cookie : null;
  console.log('home');

  // 데이터를 넘길 때는 아래 형식으로
  return {
    props : {
      title : "Test",
      initialData: {
        counterStore: { number: 1 }
      }
    }
  }
}

export default HomePage
