import React, { useState } from "react";
import styled from "styled-components";

const CatagoryTitle = styled.strong`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-main1);
  display: block;
  padding: 15px;
`;

const CatagoryWrap = styled.ul`
  border-top: 2px solid var(--color-main1);
`;

const MemuObj = styled.li`
  transition: all 0.3s ease;
  background-color: ${(props) => (props.isOpen ? "var(--color-main4);" : "#fff")};
  cursor: pointer;
  .menu {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //border-top: 1px solid var(--text-2);
    border-bottom: ${(props) => (props.isOpen ? "1px solid #d9d9d9;" : "2px solid var(--color-main1);")};
    > p {
      font-weight: 700;
    }
  }
  .sub-menu {
    height: auto;
    max-height: ${(props) => (props.isOpen ? "500px" : "0")};
    background-color: var(--color-main4);
    overflow: hidden;
    transition: all 0.3s ease;
    li {
      padding: 15px 25px;
      font-weight: 400;
      color: var(--text-2);
      cursor: pointer;
      &:last-child {
        border-bottom: ${(props) => (props.isOpen ? "2px solid var(--color-main1);" : "1px solid #d9d9d9;")};
      }
      &:hover {
        font-weight: 700;
        color: var(--color-main1);
      }
    }
  }
`;

function Catagory({ getFilterList, setMenuName }) {
  const [nowMenu, setNowMenu] = useState(null);
  const menuList = [
    {
      title: "반려동물 케어",
      sub: ["동물약국", "동물병원", "미용"],
    },
    {
      title: "여행 & 나들이",
      sub: ["식당", "카페", "문예회관", "미술관", "박물관", "여행지", "카페", "펜션", "호텔"],
    },
    {
      title: "기타",
      sub: ["위탁관리", "반려동물용품"],
    },
  ];

  const toggleMenu = (index) => {
    setNowMenu(nowMenu === index ? null : index);
  };

  return (
    <div>
      <CatagoryTitle>카테고리</CatagoryTitle>
      <CatagoryWrap>
        {menuList.map((e, i) => {
          return (
            <MemuObj key={i} isOpen={nowMenu === i}>
              <div className="menu" onClick={() => toggleMenu(i)}>
                <p>{e.title}</p>
                <i className="icon icon-arr-bottom" />
              </div>
              <ul className="sub-menu">
                {e.sub.map((e, idx) => {
                  return (
                    <li
                      key={idx}
                      onClick={(data) => {
                        getFilterList(data.target.innerText, "new");
                        setMenuName(data.target.innerText);
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      {e}
                    </li>
                  );
                })}
              </ul>
            </MemuObj>
          );
        })}
      </CatagoryWrap>
    </div>
  );
}

export default Catagory;
