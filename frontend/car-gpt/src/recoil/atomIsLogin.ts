/*
로그인 여부 atom
@author 조혜안
@since 2023.11.25
*/
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const atomIsLogin = atom<boolean>({
  key: "isLogin",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
