import React, { useEffect } from "react";
import styled from "styled-components";

const ModalArea = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const ModalBox = styled.div`
  min-width: 500px;
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
    padding: 43px 20px;
    text-align: center;
    color: #000;
  }
  .modal-btn {
    width: 100%;
    display: flex;
    align-items: center;
    border-top: 1px solid #ddd;
    > button {
      width: 50%;
      font-weight: 700;
      text-align: center;
      padding: 20px;
    }
    .close-btn {
      background-color: #fff;
      color: var(--color-main1);
    }
    .action-btn {
      background-color: var(--color-main1);
      color: #fff;
    }
  }
`;

const Modal = ({ toggle, title, content1, content2, actionFn }) => {
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
          <strong>{title}</strong>
          <button
            className="top-close"
            onClick={() => {
              toggle();
            }}
          >
            <i className="icon icon-close" />
          </button>
        </div>
        <div className="modal-content">
          <p>{content1}</p>
          <p>{content2}</p>
        </div>
        <div className="modal-btn">
          <button
            className="close-btn"
            onClick={() => {
              toggle();
            }}
          >
            아니오
          </button>
          <button
            className="action-btn"
            onClick={() => {
              actionFn();
            }}
          >
            네
          </button>
        </div>
      </ModalBox>
    </ModalArea>
  );
};

export default Modal;
