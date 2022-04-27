/**
 * 1. 자동로그인, 아이디 저장 여부 확인 (useEffect or pageProps) : registry or server 요청 및 확인
 * 2. 자동로그인 되어 있으면 > 온보딩 여부 확인
 * 3. 온보딩 완료 시 > main page routing
 * 4. 온보딩 미완료 시 > onboarding page routing
 * 5. 사용자 정보들 저장 (mobx or session storage)
 * 6. 저장될 사용자 정보들 : 아이디, 비밀번호, 토큰, 이메일, 관심사, 키워드 등
 * 7. next 로그인 유지 방안
 * - token 정보는
 */
import Login from '../src/components/login/Login'

const LoginPage = (props) => {

  return(
    <Login></Login>
  )
}

export default LoginPage;