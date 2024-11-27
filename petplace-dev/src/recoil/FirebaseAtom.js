import { atom } from "recoil";

export const firebaseState = atom({
  key: "firebaseState",
  default: {
    document: null,
    isPending: false,
    error: null,
    success: false,
  },
});
