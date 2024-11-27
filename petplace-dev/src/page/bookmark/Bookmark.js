import React, { useState } from "react";
import ContentTitleBox from "../../component/common/ContentTitleBox";
import ContentBox from "../../component/common/ContentBox";
import "./bookmark.scss";
import Catagory from "../../component/search/Catagory";

import { userInfo } from "../../recoil/UserAtom";
import { useRecoilValue } from "recoil";
import { useCollection } from "../../hooks/useCollection";

function Bookmark() {
  const userId = useRecoilValue(userInfo).uid;
  const { documents } = useCollection("bookmark", ["userId", "==", userId]);
  const [menuName, setMenuName] = useState("");

  return (
    <div className="has-head basic-page-layout">
      <div className="search-wrap">
        <div className="search-filter-wrap">
          <ContentTitleBox title="카테고리로 찾기" subTitle="나의 반려동물과 갈수 있는 장소를 카테고리로 한눈에!" image="search" />
          {/* <Catagory /> */}
        </div>
        {documents?.length === 0 ? (
          <div className="search-content initial">
            <p>자주찾는 장소나 가고싶은 장소의 별 아이콘을 눌러 나만의 플레이스 리스트를 만들어 보세요!</p>
            <strong>추가된 즐겨찾기가 없어요</strong>
          </div>
        ) : (
          <ul className="search-content">
            {documents?.map((e, i) => {
              return (
                <li>
                  <ContentBox item={e.item} key={i} />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Bookmark;
