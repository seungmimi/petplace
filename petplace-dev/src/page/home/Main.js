import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import GreetingBox from '../../component/home/GreetingBox';
import './homeStyle.scss'
import PageMenu from '../../component/home/PageMenu';

function Main() {
  const loginInfo = useContext(AuthContext);
  const menuList =[
    {menu: "map", mainTitle: "지도에서 둘러보기", subTitle: "어디로 갈지 정하지 못하셨나요?"},
    {menu: "search", mainTitle: "카테고리로 찾기", subTitle: "빠르고 정확하게!"},
    {menu: "bookmark", mainTitle: "즐겨찾기", subTitle: "나의 place pick!"},
  ]
  return (
    <main>
      <section className='main-title-box'>
        <p className='sub-title'>반려동물과 함께할 수 있는 다양한 장소</p>
        <h2 className='main-title'>
          <img src={process.env.PUBLIC_URL + 'image/pageTitle.png'} alt='petPlace'/>
        </h2>
        <div className='side-nav'>
          <GreetingBox />
        </div>
      </section>

      <section className='page-nav'>
        <h2 className='a11y-hidden'>페이지 네비게이션</h2>
        <PageMenu menuList={menuList}/>
      </section>
    </main>
  )
}

export default Main
