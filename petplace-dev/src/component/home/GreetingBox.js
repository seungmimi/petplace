import React from 'react'
import styled from 'styled-components';

const SideBox = styled.div`
  width: 232px;
  border-radius: 20px;
  border: 3px solid var(--text-1);
  overflow: hidden;
  box-shadow: 0px 10px 25px 5px rgba(0,0,0,0.1);
  background-color: #fff;
`;
const GreetingArea = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  .profile-img {
    width: 80px;
    height: 80px;
    border-radius: 200px;
    border: 1px solid #d9d9d9;
    overflow: hidden;
  }
  .greeting-ment {
    color: var(--text-2);
    p {
      font-size: 1.125rem;
    }
    strong {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`
const MenuArea = styled.ul`
  li {
    display: block;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    border-top: 1px solid #D1D3D4;
    text-align: center;
    cursor: pointer;
  }
`

const GreetingBox = () => {
  return (
    <SideBox>
      <GreetingArea>
        <div className='profile-img'>
          <img src={process.env.PUBLIC_URL + 'image/basic-profile.png'} alt='profile'/>
        </div>
        <div className='greeting-ment'>
          <p>안녕하세요!</p>
          <p>
            <strong>펫플</strong><span>님</span>
          </p>
        </div>
      </GreetingArea>
      <MenuArea>
        <li>
          <a href='#'>즐겨찾기</a>
        </li>
        <li>
          <a href='#'>내 정보 수정</a>
        </li>
        <li>
          <a href='#'>로그아웃</a>
        </li>
      </MenuArea>
    </SideBox>
  )
}

export default GreetingBox
