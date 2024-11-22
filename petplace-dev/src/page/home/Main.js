import React, { useEffect, useState } from "react";
import GreetingBox from "../../component/home/GreetingBox";
import "./homeStyle.scss";
import PageMenu from "../../component/home/PageMenu";
import NewContentSlide from "../../component/home/NewContentSlide";
import Footer from "../../component/Footer";
import TopBannerBox from "../../component/home/TopBannerBox";
import { useRecoilValue } from "recoil";
import { userInfo } from "../../recoil/UserAtom";
import { kcisaApi } from "../../api/KcisaApi";

function Main() {
  const loginInfo = useRecoilValue(userInfo);
  const menuList = [
    { menu: "map", mainTitle: "지도에서 둘러보기", subTitle: "어디로 갈지 정하지 못하셨나요?" },
    { menu: "search", mainTitle: "카테고리로 찾기", subTitle: "빠르고 정확하게!" },
    { menu: "bookmark", mainTitle: "즐겨찾기", subTitle: "나의 place pick!" },
  ];
  const [newState, setNewState] = useState([]);

  useEffect(() => {
    const apiData = async () => {
      await kcisaApi
        .get("", {
          params: {
            serviceKey: process.env.REACT_APP_KCISA_API_KEY,
            numOfRows: 6,
            pageNo: 1,
          },
        })
        .then((res) => setNewState(res.data.response.body.items.item));
    };
    apiData();
  }, []);

  return (
    <>
      <main>
        <section className="main-title-box">
          <TopBannerBox />
          <div className="side-nav">
            <GreetingBox loginInfo={loginInfo} />
          </div>
        </section>

        <section className="page-nav">
          <h2 className="a11y-hidden">페이지 네비게이션</h2>
          <PageMenu menuList={menuList} />
        </section>
        <section className="new-content">
          <h2 className="page-title">
            <span>새로 생겼어요!</span>
            <strong>NEW PLACE</strong>
          </h2>
          {newState.length !== 0 ? <NewContentSlide newState={newState} /> : ""}
        </section>
      </main>
    </>
  );
}

export default Main;
