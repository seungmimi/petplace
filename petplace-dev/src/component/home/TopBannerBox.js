import React from "react";
import styled from "styled-components";

const DecoBox = styled.div`
  height: 100%;
  position: relative;
  .walking-img {
    position: absolute;
    right: 5%;
    bottom: 50px;
    max-width: 230px;
  }
  .sun {
    position: absolute;
    width: 114px;
    top: 45px;
    left: 18%;
    animation: spin 10s infinite linear;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .left-grass {
    position: absolute;
    left: 0;
    width: 280px;
    bottom: 119px;
  }
  .rignt-grass {
    position: absolute;
    right: 0;
    width: 180px;
    bottom: 119px;
  }
  .cloud {
    position: absolute;
    right: 120px;
    top: 30%;
    width: 200px;
    animation: cloud 1s infinite ease-in-out alternate;
  }
  @keyframes cloud {
    0% {
      top: 30%;
    }
    100% {
      top: 25%;
    }
  }
  .bottom-load {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 120px;
    border-top: 5px solid #2f3c1e;
    background-color: var(--color-main2);
  }
`;

const TitleBox = styled.div`
  position: absolute;
  top: calc(50% - 50px);
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SubTitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 14px;
`;
const MainTitle = styled.h2`
  text-align: center;
  width: 100%;
  img {
    max-width: 400px;
  }
`;

function TopBannerBox() {
  return (
    <DecoBox>
      <TitleBox>
        <SubTitle>반려동물과 함께할 수 있는 다양한 장소</SubTitle>
        <MainTitle className="main-title">
          <img src={process.env.PUBLIC_URL + "/image/pageTitle.png"} alt="petPlace" />
        </MainTitle>
      </TitleBox>
      <img className="left-grass" src={process.env.PUBLIC_URL + "/image/deco-left-plant.png"} alt="" />
      <img className="rignt-grass" src={process.env.PUBLIC_URL + "/image/deco-right-plant.png"} alt="" />
      <img className="cloud" src={process.env.PUBLIC_URL + "/image/deco-cloud2.png"} alt="" />
      <div className="bottom-load"></div>
      <img className="sun" src={process.env.PUBLIC_URL + "/image/deco-sun.png"} alt="" />
      <img className="walking-img" src={process.env.PUBLIC_URL + "/image/deco-walking-main.png"} alt="" />
    </DecoBox>
  );
}

export default TopBannerBox;
