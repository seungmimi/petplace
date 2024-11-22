import React from "react";
import styled from "styled-components";

const FooterBox = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--color-main2);
  height: 200px;
  margin-top: 200px;
  > p {
    color: #fff;
  }
  .deco-img {
    position: absolute;
    &.left {
      max-width: 248px;
      top: 0%;
      left: 0;
      transform: translateY(calc(-100% + 1px));
    }
    &.right {
      max-width: 148px;
      top: 0%;
      right: 30px;
      transform: translateY(-80%) scaleX(-1);
    }
  }
`;

function Footer() {
  return (
    <FooterBox>
      <div className="deco-img left">
        <img src={process.env.PUBLIC_URL + "image/deco-left-plant.png"} alt="" />
      </div>
      <p>본 페이지는 상업적 목적이 아닌 한 개인 프로젝트를 목적으로 제작되었습니다.</p>
      <p>2022103885 이승미</p>
      <div className="deco-img right">
        <img src={process.env.PUBLIC_URL + "image/deco-walking.png"} alt="" />
      </div>
    </FooterBox>
  );
}

export default Footer;
