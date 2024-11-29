import React, { useState } from "react";
import "./memberStyle.scss";
import { BasicInput, LabelInput } from "../../component/common/Input";
import { BasicBtn } from "../../component/common/Button";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";
import LoadingModal from "../../component/common/Loading";

function Login() {
  const { error, isPending, signup } = useSignup();
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleInput = (e, inputType) => {
    inputType(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <>
      <div className="member-bottom-deco">
        <img src={process.env.PUBLIC_URL + "/image/deco-left-plant.png"} alt="" className="left" />
        <img src={process.env.PUBLIC_URL + "/image/deco-right-plant.png"} alt="" className="right" />
      </div>
      <section className="member-area custom-scroll-1">
        <h2 className="member-title">
          <p>반려동물과 함께할 수 있는 다양한 장소</p>
          <img src={process.env.PUBLIC_URL + "/image/pageTitle.png"} alt="petplace" />
          <p className="a11y-hidden">petplace</p>
        </h2>
        <div className="member-box join">
          <h3 className="box-title">회원가입</h3>
          <form>
            <LabelInput>
              이메일
              <BasicInput
                placeholder="이메일을 입력해 주세요"
                value={email}
                onChange={(e) => {
                  handleInput(e, setEmail);
                }}
              />
            </LabelInput>
            <LabelInput>
              닉네임
              <BasicInput
                placeholder="닉네임을 입력해 주세요"
                value={displayName}
                onChange={(e) => {
                  handleInput(e, setDisplayName);
                }}
              />
            </LabelInput>
            <LabelInput>
              비밀번호
              <BasicInput
                placeholder="비밀번호를 입력해 주세요"
                type="password"
                value={password}
                autoComplete="off"
                onChange={(e) => {
                  handleInput(e, setPassword);
                }}
              />
            </LabelInput>
            <LabelInput>
              비밀번호 확인
              <BasicInput
                placeholder="비밀번호를 입력해 주세요"
                type="password"
                value={passwordCheck}
                autoComplete="off"
                onChange={(e) => {
                  handleInput(e, setPasswordCheck);
                }}
              />
            </LabelInput>
            {isPending ? (
              <>
                <LoadingModal />
                <BasicBtn disabled $line className="submit-btn">
                  회원 가입 진행중입니다
                </BasicBtn>
              </>
            ) : (
              <BasicBtn
                type="submit"
                className="submit-btn"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                회원가입
              </BasicBtn>
            )}
          </form>
          <div className="under-text-box">
            <Link to="/login" className="under-text">
              로그인
            </Link>
            <Link to="/home" className="under-text">
              메인화면
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
