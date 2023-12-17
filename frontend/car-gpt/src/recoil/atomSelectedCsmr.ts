/*
선택된 고객관리번호 atom
@author 조혜안
@since 2023.11.25
*/
import { atom } from "recoil";

export const atomSelectedCsmr = atom<string>({
  key: "SelectedCsmr",
  default: undefined,
});

export const atomSelectedCsmrNm = atom<string>({
  key: "SelectedCsmrNm",
  default: undefined,
});
