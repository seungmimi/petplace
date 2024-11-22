import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MenuBox = styled.a`
  width: 100%;
  max-width: 313px;
  padding: 20px 10px;
  border-radius: 10px;
  border: 3px solid var(--text-1);
  position: relative;
  height: 150px;
`;
const DecoImgBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 180px;
  height: 180px;
`;
const TextBox = styled.div`
  position: absolute;
  right: 24px;
  bottom: 16px;
  color: var(--text-2);
  text-align: center;
  .sub-name {
    font-size: 0.875rem;
  }
  .menu-name {
    font-size: 1.125rem;
    font-weight: 700;
  }
`;

const PageMenu = ({ menuList }) => {
  const navigate = useNavigate();
  return menuList.map((e, i) => {
    return (
      <MenuBox
        key={i}
        onClick={() => {
          navigate(`/${e.menu}`);
        }}
      >
        <DecoImgBox>
          <img src={process.env.PUBLIC_URL + `image/menu-${e.menu}.png`} alt={`${e.menu}`} />
        </DecoImgBox>
        <TextBox>
          <p className="sub-name">{e.subTitle}</p>
          <strong className="menu-name">{e.mainTitle}</strong>
        </TextBox>
      </MenuBox>
    );
  });
};

export default PageMenu;
