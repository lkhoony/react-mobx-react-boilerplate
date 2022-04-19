import { observer, inject } from 'mobx-react'

const AboutPage = (props) => {

  console.log(props);

  const {router} = props;

  const {number, decrease, increase} = props.store.rootStore.counterStore;

  return(
    <div>
      About Page
      <div onClick={(e)=>{increase()}}>increase</div>
      <div>{number}</div>
    </div>
  )
}

export default inject('store')(observer(AboutPage));