import React, { useEffect, useState } from "react";
import ContentTitleBox from "../../component/common/ContentTitleBox";
import ContentBox from "../../component/common/ContentBox";
import { kcisaApi } from "../../api/KcisaApi";
import "./search.scss";
import Catagory from "../../component/search/Catagory";
import LoadingModal from "../../component/common/Loading";

import { useNavigate } from "react-router-dom";
import Modal from "../../component/common/Modal";

function Search() {
  const [filterList, setFilterList] = useState("");
  const [menuName, setMenuName] = useState("");

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const modalToggle = () => {
    setModalOpen((prev) => !prev);
  };

  //무한 스크롤
  const [isBottom, setIsBottom] = useState(false);
  const [pageToFetch, setPageToFetch] = useState(1);

  //로딩 중 상태 체크용
  const [isLoading, setIsLoading] = useState(false);

  const getFilterList = async (selectMenu, type) => {
    setIsLoading(true);
    await kcisaApi
      .get("", {
        params: {
          serviceKey: process.env.REACT_APP_KCISA_API_KEY,
          numOfRows: 10,
          pageNo: type === "add" ? pageToFetch : 1,
          category: selectMenu,
        },
      })
      .then((res) => {
        if (type === "add") {
          setFilterList((prevList) => [...prevList, ...res.data.response.body.items.item]);
        } else {
          setFilterList(res.data.response.body.items.item);
        }
        setIsLoading(false);
      });
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
      // 약간의 여유를 두기
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };
  useEffect(() => {
    if (menuName !== "") {
      const fetchData = async () => {
        if (isBottom && !isLoading) {
          setPageToFetch((prevPage) => prevPage + 1);
          await getFilterList(menuName, "add"); // Fetch data with the updated page number
        }
      };
      fetchData();
    }
  }, [isBottom]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="has-head basic-page-layout">
      <div className="search-wrap">
        <div className="search-filter-wrap">
          <ContentTitleBox title="카테고리로 찾기" subTitle="나의 반려동물과 갈수 있는 장소를 카테고리로 한눈에!" image="search" />
          <Catagory getFilterList={getFilterList} setMenuName={setMenuName} />
        </div>
        {filterList.length === 0 ? (
          <div className="search-content initial">
            <p>반려동물과 함께할 수 있는 다양한 장소를 알아볼까요?</p>
            <strong>카테고리를 선택해 주세요!</strong>
          </div>
        ) : isLoading ? (
          <LoadingModal />
        ) : (
          <ul className="search-content">
            {filterList.map((e, i) => {
              return (
                <li>
                  <ContentBox item={e} key={i} setModalOpen={setModalOpen} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
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
    </div>
  );
}

export default Search;
