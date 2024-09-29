import React from 'react'

function Login() {
  return (
    <div>
      <h3>프로필 로그인</h3>
      <form>
        <label>
          <span>닉네임</span>
          <input type='text' placeholder='닉네임을 입력해 주세요'/>
        </label>
        <label>
          <span>닉네임</span>
          <input type='text' placeholder='비밀번호를 입력해 주세요'/>
        </label>
        <button type='submit'>로그인</button>
      </form>
      <p>프로필 없이 둘러보기</p>
    </div>
  )
}

export default Login
