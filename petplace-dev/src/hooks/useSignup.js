import { useState } from "react";
import { appAuth } from "../firebase/config";
import { useSetRecoilState } from "recoil";
import { userInfo } from "../recoil/UserAtom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const setLoginUserInfo = useSetRecoilState(userInfo);

  // signup 훅
  const signup = (email, password, displayName) => {
    setError(null);
    setIsPending(true);
    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (!user) {
          throw new Error("회원가입에 실패했습니다.");
        }
        updateProfile(appAuth.currentUser, { displayName })
          .then(() => {
            setError(null);
            setLoginUserInfo({
              name: user.displayName,
              email: user.email,
              uid: user.uid,
              status: true,
            });
            navigate("/home");
            setIsPending(false);
          })
          .catch((err) => {
            setError(err.message);
            setIsPending(false);
            console.log(err.message);
          });
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.log(err.message);
      });
  };

  return { error, isPending, signup };
};
