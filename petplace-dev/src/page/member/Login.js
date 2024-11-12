import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './memberStyle.scss'
import { BasicInput } from '../../component/common/Input'
import { BasicBtn } from '../../component/common/Button'
import { useLogin } from '../../hooks/useLogin'
import { AuthContext } from '../../context/AuthContext'

function Login() {
  //const isLogin = useContext(AuthContext);
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {error, isPending, login} = useLogin();
  
  const handleInput = (e, inputType) => {
    inputType(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    if(error === null){
      navigate('/main')
    }
  }

  return (
    <>
    <div className='member-bottom-deco'>
      <img src={process.env.PUBLIC_URL + 'image/deco-left-plant.png'} alt='' className='left'/>
      <img src={process.env.PUBLIC_URL + 'image/deco-right-plant.png'} alt='' className='right'/>
    </div>
    <section className='member-area custom-scroll-1'>
      <h2 className='member-title'>
        <p>반려동물과 함께할 수 있는 다양한 장소</p>
        <img src={process.env.PUBLIC_URL + 'image/pageTitle.png'} alt="petplace"/>
        <p className='a11y-hidden'>petplace</p>
      </h2>
      <div className='member-box login'>
        <h3 className='box-title'>로그인</h3>
        <form>
            <BasicInput placeholder='이메일을 입력해 주세요'
              value={email}
              onChange={(e) => {handleInput(e, setEmail)}}
            />
            <BasicInput
              placeholder='비밀번호를 입력해 주세요'
              type='password'
              value={password}
              autoComplete="off" 
              onChange={(e) => {handleInput(e, setPassword)}}
            />
          {/* 조건부 랜더링을 사용합니다. 로그인이 진행 전이라면 로그인 버튼을 노출하고 */}
          {!isPending && <BasicBtn type='submit' className='submit-btn' onClick={(e) => {handleSubmit(e)}}>로그인</BasicBtn>}
          {/* 로그인이 진행 중이라면 로그인 버튼을 제거하고 정보를 표시합니다. */}
          {isPending && <strong>로그인이 진행중입니다...</strong>}
          {error && <strong>{error}</strong>}
          {/* <BasicBtn type='submit' className='submit-btn'>로그인</BasicBtn> */}
        </form>
        <div className='under-text-box'>
          <Link to='/join' className='under-text'>회원가입</Link>
          <Link to='' className='under-text'>가입 없이 둘러보기</Link>
        </div>

      </div>
    </section>
    </>

  )
}

export default Login
