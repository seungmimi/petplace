import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { userInfo } from "../recoil/UserAtom";
import { appAuth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [errorText, serErrorText] = useState("");
  const [isPending, setIsPending] = useState(false);

  const setLoginUserInfo = useSetRecoilState(userInfo);

  const login = (email, password) => {
    setError(null);
    setIsPending(true);

    signInWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoginUserInfo({
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          status: true,
        });
        navigate("/home");
        setError(null);
        setIsPending(false);
        // 회원 정보를 정상적으로 받지 못하면 실패
        if (!user) {
          throw new Error("로그인에 실패했습니다.");
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        if (err.code === "auth/invalid-email") {
          serErrorText("아이디는 이메일 형식으로 작성해 주세요.");
        }
        if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
          serErrorText("회원정보가 일치하지 않습니다.");
        }
        if (err.code === "auth/too-many-requests") {
          serErrorText("잠시 후 다시 시도해 주세요");
        }
      });
  };

  return { error, isPending, errorText, login };
};
