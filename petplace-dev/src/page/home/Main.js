import React, { useEffect, useState } from "react";
import GreetingBox from "../../component/home/GreetingBox";
import "./homeStyle.scss";
import PageMenu from "../../component/home/PageMenu";
import NewContentSlide from "../../component/home/NewContentSlide";
import TopBannerBox from "../../component/home/TopBannerBox";
import { useRecoilValue } from "recoil";
import { userInfo } from "../../recoil/UserAtom";
import { kcisaApi } from "../../api/KcisaApi";
import Modal from "../../component/common/Modal";
import { useNavigate } from "react-router-dom";
//import { useCollection } from "../../hooks/useCollection";

function Main() {
  const navigate = useNavigate();
  const loginInfo = useRecoilValue(userInfo);
  const menuList = [
    { menu: "map", mainTitle: "지도에서 둘러보기", subTitle: "어디로 갈지 정하지 못하셨나요?" },
    { menu: "search", mainTitle: "카테고리로 찾기", subTitle: "빠르고 정확하게!" },
    { menu: "bookmark", mainTitle: "즐겨찾기", subTitle: "나의 place pick!" },
  ];
  const [newState, setNewState] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const modalToggle = () => {
    setModalOpen((prev) => !prev);
  };

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
          <PageMenu menuList={menuList} loginInfo={loginInfo} setModalOpen={setModalOpen} />
        </section>
        <section className="new-content">
          <h2 className="page-title">
            <span>새로 생겼어요!</span>
            <strong>NEW PLACE</strong>
          </h2>
          {newState.length !== 0 ? <NewContentSlide newState={newState} setModalOpen={setModalOpen} /> : ""}
        </section>
        {modalOpen ? (
          <Modal
            toggle={modalToggle}
            title="로그인 필요"
            content1="로그인이 필요한 서비스 입니다"
            content2="로그인 하시겠습니까?"
            actionFn={() => {
              navigate("/login");
            }}
          />
        ) : (
          ""
        )}
      </main>
    </>
  );
}

export default Main;
