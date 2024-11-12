import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

function Main() {
  const loginInfo = useContext(AuthContext);
  return (
    <main>
      <div>로그인 성공</div>
      <p>안녕하세요, {loginInfo.user.displayName}님</p>
    </main>
  )
}

export default Main
