import {useEffect} from 'react';
import { observer, inject } from 'mobx-react'
import {receiveResponse} from '../src/utils/api'
const AboutPage = (props) => {

  console.log(props);


  const {router} = props;

  const {number, decrease, increase} = props.store.rootStore.counterStore;

  useEffect(()=>{
    receiveResponse({test : 1}, "/test");
  },[]);

  return(
    <div>
      About Page
      <div onClick={(e)=>{increase()}}>increase</div>
      <div>{number}</div>
    </div>
  )
}

export default inject('store')(observer(AboutPage));