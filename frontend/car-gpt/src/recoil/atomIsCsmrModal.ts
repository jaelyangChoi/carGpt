/*
회웜 상세정보 모달 열림 여부 atom
@author 조혜안
@since 2023.11.25
*/
import { atom } from "recoil";

export const atomIsCsmrModal = atom<boolean>({
  key: "isCsmrModal",
  default: false,
});
