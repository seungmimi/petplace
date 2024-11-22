import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLogout } from "../../hooks/useLogout";

const SideBox = styled.div`
  width: 232px;
  border-radius: 20px;
  border: 3px solid var(--text-1);
  overflow: hidden;
  box-shadow: 0px 10px 25px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;
const GreetingArea = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  .profile-img {
    width: 80px;
    height: 80px;
    border-radius: 200px;
    border: 1px solid #d9d9d9;
    overflow: hidden;
  }
  .welcome-img {
    position: absolute;
    right: 10px;
    bottom: 0;
    max-width: 101px;
  }
  .greeting-ment {
    color: var(--text-2);
    p {
      font-size: 1.125rem;
    }
    strong {
      font-size: 1.25rem;
      font-weight: 700;
    }
    &.no-login {
      text-align: left;
    }
  }
`;
const MenuArea = styled.ul`
  li {
    display: block;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    border-top: 1px solid #d1d3d4;
    text-align: center;
    cursor: pointer;
  }
`;

const GreetingBox = ({ loginInfo }) => {
  const { error, isPending, logout } = useLogout();
  return (
    <SideBox>
      {loginInfo.status ? (
        <GreetingArea>
          <div className="profile-img">
            <img src={process.env.PUBLIC_URL + "image/basic-profile.png"} alt="profile" />
          </div>
          <div className="greeting-ment">
            <p>안녕하세요!</p>
            <p>
              <strong>{loginInfo.name}</strong>
              <span>님</span>
            </p>
          </div>
        </GreetingArea>
      ) : (
        <GreetingArea>
          <div className="greeting-ment no-login">
            <p>반가워요!</p>
            <strong>Petplace</strong>
            <p>입니다!</p>
          </div>
          <div className="welcome-img">
            <img src={process.env.PUBLIC_URL + "image/deco-greeting-box.png"} alt="" />
          </div>
        </GreetingArea>
      )}
      {loginInfo.status ? (
        <MenuArea>
          <li>
            <a href="#">즐겨찾기</a>
          </li>
          <li>
            <a href="#">내 정보 수정</a>
          </li>
          <li>
            <p onClick={logout}>로그아웃</p>
          </li>
        </MenuArea>
      ) : (
        <MenuArea>
          <li>
            <a href="#">가이드 보러가기</a>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
        </MenuArea>
      )}
    </SideBox>
  );
};

export default GreetingBox;
