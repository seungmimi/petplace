import React from "react";
import styled from "styled-components";
import { Bage } from "./Bage";
import { BasicBtn } from "./Button";

const BoxWrap = styled.div`
  padding: 35px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  .title-box {
    .bage-box {
      display: flex;
      gap: 10px;
      margin-bottom: 15px;
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
  return (
    <div>
      <BoxWrap>
        <div className="title-box">
          <div className="bage-box">
            <Bage>{item.category1}</Bage>
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
        <BasicBtn>홈페이지 바로가기</BasicBtn>
      </BoxWrap>
    </div>
  );
}

export default ContentBox;
