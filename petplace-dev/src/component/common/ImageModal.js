import React, { useEffect } from "react";
import styled from "styled-components";

const ModalArea = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

const ModalBox = styled.div`
  min-width: 912px;
  max-height: 80vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0.25);
  background-color: #fff;
  overflow: hidden;
  .modal-title {
    padding: 30px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ddd;
    > strong {
      font-weight: 700;
      font-size: 1.125rem;
    }
    .top-close {
      position: absolute;
      right: 20px;
    }
  }
  .modal-content {
    overflow-y: scroll;
    padding: 43px 20px;
    text-align: center;
    color: #000;
  }
`;

function ImageModal({ toggle }) {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  return (
    <ModalArea>
      <ModalBox>
        <div className="modal-title">
          <strong>가이드</strong>
          <button
            className="top-close"
            onClick={() => {
              toggle();
            }}
          >
            <i className="icon icon-close" />
          </button>
        </div>
        <div className="modal-content custom-scroll-2">
          <img src={process.env.PUBLIC_URL + "image/guidePage.png"} alt="" />
        </div>
      </ModalBox>
    </ModalArea>
  );
}

export default ImageModal;
