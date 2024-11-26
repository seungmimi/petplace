import React from "react";
import styled from "styled-components";

const BoxWrap = styled.div`
  width: fit-content;
  padding: 30px 20px;
  border: 5px solid var(--color-main3);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background-color: #fff;
  > strong {
    font-size: 1.5rem;
    color: var(--text-2);
    font-weight: 700;
  }
  > p {
    color: var(--text-2);
    font-weight: 700;
  }
  .title-box-deco {
    position: absolute;
    top: 0px;
    left: 15px;
    width: 107px;
    transform: translateY(-50%);
  }
`;

function ContentTitleBox(item) {
  return (
    <BoxWrap>
      <strong>{item.title}</strong>
      <p>{item.subTitle}</p>
      <div className="title-box-deco">
        <img src={process.env.PUBLIC_URL + `image/title-deco-${item.image}.png`} alt="" />
      </div>
    </BoxWrap>
  );
}

export default ContentTitleBox;
