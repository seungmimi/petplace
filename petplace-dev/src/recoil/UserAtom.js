import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
//recoil state 생성
export const userInfo = atom({
  key: "userInfo",
  default: {
    name: "",
    email: "",
    uid: "",
    status: false,
  },
  effects_UNSTABLE: [persistAtom],
});
