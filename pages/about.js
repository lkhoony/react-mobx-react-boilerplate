import {useEffect} from 'react';
import { observer, inject } from 'mobx-react'
import {receiveResponse} from '../src/utils/api';
import { useRouter } from 'next/router'
import Layout from '../src/layout/Layout'
const AboutPage = (props) => {

  console.log(props);

  // const {router} = props;

  const router = useRouter();

  const {number, decrease, increase} = props.store.rootStore.counterStore;

  useEffect(()=>{
    // receiveResponse({test : 1}, "/test");
  },[]);

  return(
    <Layout>about</Layout>
    // <div>
    //   About Page
    //   <div onClick={(e)=>{increase()}}>increase</div>
    //   <div>{number}</div>
    //   <div onClick={()=>router.push("/onBoarding")}>onboarding</div>
    // </div>
  )
}

// // 빌드와 상관없이 매 요청마다 데이터를 서버로 부터 가져옴
export const getServerSideProps = async (ctx) => {

  console.log(Object.keys(ctx));
  console.log(ctx.query);

  // receiveResponse(ctx.query, "/test");

  const cookieReq = ctx.req ? ctx.req.headers.cookie : null;
  console.log(cookieReq);

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

export default inject('store')(observer(AboutPage));