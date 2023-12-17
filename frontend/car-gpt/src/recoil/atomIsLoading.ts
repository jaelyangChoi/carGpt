/*
로딩 여부 atom
@author 조혜안
@since 2023.11.25
*/
import { atom } from "recoil";

export const atomIsLoading = atom<boolean>({
  key: "isMailModal",
  default: false,
});
