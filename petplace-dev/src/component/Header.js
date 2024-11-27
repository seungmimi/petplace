import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BasicBtn } from "./common/Button";
import { useLogout } from "../hooks/useLogout";

const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 30px 100px 15px 100px;
  img {
    max-width: 162px;
  }
`;

const Navigate = styled.nav`
  display: flex;
  gap: 45px;
  align-items: center;
  .user-info {
    .login-btn {
      width: 120px;
    }
    .user-btn {
      display: flex;
      gap: 20px;
      align-items: center;
      > img {
        border-radius: 500px;
        width: 43px;
        height: 43px;
        border: 1px solid #d9d9d9;
      }
      > strong {
        font-weight: 700;
        font-size: 1.25rem;
        > span {
          font-size: 1rem;
          font-weight: 400;
        }
      }
    }
  }
`;

const UserFloating = styled.div`
  position: absolute;
  top: 106px;
  right: 100px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 25px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 2px solid var(--color-main1);
  z-index: 1000;
  background-color: #fff;
  > a {
    display: block;
    padding: 10px 20px;
    height: 50px;
    text-align: center;
    &:first-child {
      border-bottom: 1px solid #d1d3d4;
    }
  }
`;

const Header = ({ userInfo }) => {
  const { error, isPending, logout } = useLogout();
  const navigate = useNavigate();
  const [floatOpen, setFloatOpen] = useState(false);
  const goLogin = () => {
    navigate("/login");
  };
  return (
    <HeaderBox>
      <Link to={"/home"}>
        <img src={process.env.PUBLIC_URL + "image/header-logo.png"} alt="prtplace" />
      </Link>
      <Navigate>
        <Link to={"/map"}>지도에서 둘러보기</Link>
        <Link to={"/search"}>카테고리에서 찾기</Link>
        <Link to={"/bookmark"}>즐겨찾기</Link>
        <div className="user-info">
          {userInfo.status ? (
            <BasicBtn
              $line
              className="user-btn"
              onClick={() => {
                setFloatOpen(!floatOpen);
              }}
            >
              <img src={process.env.PUBLIC_URL + "image/basic-profile.png"} alt="" />
              <strong>
                {userInfo.name}
                <span> 님</span>
              </strong>
            </BasicBtn>
          ) : (
            <BasicBtn
              className="login-btn"
              onClick={() => {
                goLogin();
              }}
            >
              로그인
            </BasicBtn>
          )}
        </div>
      </Navigate>
      {floatOpen ? (
        <UserFloating>
          <Link>내 정보 수정</Link>
          <Link onClick={logout}>로그아웃</Link>
        </UserFloating>
      ) : (
        ""
      )}
    </HeaderBox>
  );
};

export default Header;
