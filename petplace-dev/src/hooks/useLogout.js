import { useState } from "react";
import { appAuth } from "../firebase/config";
import { signOut } from "firebase/auth";

import { useResetRecoilState } from "recoil";
import { userInfo } from "../recoil/UserAtom";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  //로그인 상태값 초기화
  const setLoginUserInfo = useResetRecoilState(userInfo);

  // 로그아웃합니다.
  const logout = () => {
    setError(null);
    setIsPending(true);

    signOut(appAuth)
      .then(() => {
        setLoginUserInfo();
        navigate("/login");
        setError(null);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      });
  };
  return { error, isPending, logout };
};
