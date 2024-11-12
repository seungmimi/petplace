import { useState } from 'react'
import { appAuth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  // 에러 정보를 저장
  const [error, setError] = useState(null);
  // 현재 서버와 통신중인 상태를 저장
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  // signup 훅
  const signup = (email, password, displayName) => {
    setError(null);
    setIsPending(true);
    createUserWithEmailAndPassword(appAuth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      if (!user) {
        throw new Error('회원가입에 실패했습니다.');
      }
      updateProfile(appAuth.currentUser, { displayName })
        .then(() => {
          dispatch({ type: 'login', payload: user });
          setError(null);
          setIsPending(false);
        }).catch((err) => {
          setError(err.message);
          setIsPending(false)
          console.log(err.message);
        });
    })
    .catch((err) => {
      setError(err.message);
      setIsPending(false);
      console.log(err.message);
    });
  }

  return { error, isPending, signup }
}