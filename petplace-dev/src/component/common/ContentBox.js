import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Bage } from "./Bage";
import { BasicBtn } from "./Button";
import { useFirestore } from "../../hooks/useFirestore";
import { userInfo } from "../../recoil/UserAtom";
import { useRecoilValue } from "recoil";
import { useCollection } from "../../hooks/useCollection";

const BoxWrap = styled.div`
  padding: 35px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  .title-box {
    .top-box {
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .bookmark-wrap {
      margin-top: 0;
    }
    .bage-box {
      display: flex;
      gap: 10px;
    }
    .content-title {
      display: block;
      font-size: 1.375rem;
    }
    .location {
      display: flex;
      gap: 4px;
      > i {
        margin-top: 1px;
        flex-shrink: 0;
      }
      > p {
        font-size: 0.875rem;
        color: var(--color-main1);
      }
    }
  }
  .info-box {
    .info-title {
      font-weight: 700;
      margin-bottom: 5px;
    }
  }
`;

function ContentBox({ item }) {
  const [isBookmark, setIsBookmark] = useState(false);
  const [id, setId] = useState("");
  const userId = useRecoilValue(userInfo).uid;
  const { documents } = useCollection("bookmark", ["userId", "==", userId]);
  const { addDocument, deleteDocument } = useFirestore("bookmark");

  useEffect(() => {
    if (documents && userId) {
      const found = documents.find((e) => e.item.title === item.title);
      if (found) {
        setIsBookmark(true);
        setId(found.id); // ID 설정
      } else {
        setIsBookmark(false);
        setId(""); // 북마크가 없을 경우 ID 초기화
      }
    }
  }, [documents, item.title]);

  const toggleBookmark = (e) => {
    e.preventDefault();
    if (isBookmark) {
      deleteDocument({ id }); // ID 전달
    } else {
      addDocument({ userId, item });
    }
  };

  return (
    <div>
      <BoxWrap>
        <div className="title-box">
          <div className="top-box">
            <div className="bage-box">
              <Bage>{item.category1}</Bage>
              {item.category2 ? <Bage>{item.category2}</Bage> : ""}
            </div>
            <button
              className="bookmark-wrap"
              onClick={(e) => {
                toggleBookmark(e);
              }}
            >
              <i className={`icon ${isBookmark ? "icon-bookmark-active" : "icon-bookmark"}`} />
            </button>
          </div>
          <strong className="content-title">{item.title}</strong>
          <div className="location">
            <i className="ion icon-pin" />
            <p>{item.address}</p>
          </div>
        </div>
        <div className="info-box">
          <strong className="info-title">설명</strong>
          <p>{item.description}</p>
          <p>{item.charge}</p>
        </div>
        <div className="info-box">
          <strong className="info-title">연락처</strong>
          <p>{item.tel}</p>
        </div>
        {item.url !== null ? (
          <BasicBtn onClick={() => window.open(item.url, "_blank")}>홈페이지 바로가기</BasicBtn>
        ) : (
          <BasicBtn $line disabled>
            홈페이지 준비중
          </BasicBtn>
        )}
      </BoxWrap>
    </div>
  );
}

export default ContentBox;
