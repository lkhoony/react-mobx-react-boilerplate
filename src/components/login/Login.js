import react, {useEffect, useState}  from 'react'
import {LoginPageContainer, LoginWrap, LogoWrap, LoginButton } from './LoginStyles'
import LoginInput from './LoginInput';
import LoginCheckbox from './LoginCheckbox'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Login = (props) => {

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [isSaveUserId, setIsSaveUserId] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false);

  const router = useRouter();

  useEffect(()=>{
    /**
     * 자동로그인, 아이디 저장 여부 확인
      */
  }, []);

  const onChangeUserId = e => {
    setUserId(e.target.value);
  }

  const onChangeUserPw = e => {
    setUserPw(e.target.value);
  }

  const onClickSaveUserId = e => {
    setIsSaveUserId(!isSaveUserId);

    if(isAutoLogin){
      setIsAutoLogin(false);
    }
  }

  const onClickAutoLogin = e => {
    setIsAutoLogin(!isAutoLogin);

    if(!isSaveUserId){
      setIsSaveUserId(true);
    }
  }

  const clearUserId = e => {
    setUserId('');
  }

  const clearUserPw = e => {
    setUserPw('');
  }

  const onLogin = e => {
    /**
     * 로그인 정보 저장 필요 -> 어디에 해야하나?
     */
    router.push({
      pathname: '/home'
    });
  }

  return(
    <LoginPageContainer>
      <LoginWrap>
        <LogoWrap></LogoWrap>
        <LoginInput
          value={userId}
          clear={clearUserId}
          onChange={onChangeUserId}
        ></LoginInput>
        <LoginInput
          value={userPw}
          clear={clearUserPw}
          onChange={onChangeUserPw}
        ></LoginInput>
        <LoginButton
          onClick={onLogin}
          isDisabled={userId==='' || userPw===''}>Login</LoginButton>
        <LoginCheckbox
          value={isSaveUserId}
          onClick={onClickSaveUserId}
          label={'아이디 저장'}></LoginCheckbox>
        <LoginCheckbox
          value={isAutoLogin}
          onClick={onClickAutoLogin}
          label={'자동 로그인'}></LoginCheckbox>
      </LoginWrap>
    </LoginPageContainer>
  )

}

export default Login;