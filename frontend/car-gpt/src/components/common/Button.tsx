/*
버튼 속성 : bgcolor(배경색), fontcolor(글씨색)
@author 조혜안
@since 2023.11.07
*/
import * as React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

interface StyledButtonProps {
  width: string;
  bgcolor: string;
  fontcolor: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  && {
    width: ${(props) => props.width};
    background-color: ${(props: any) => props.bgcolor || "#00287A"};
    color: ${(props: any) => props.fontcolor || "#000000"};
    border: none;
    border-radius: 5px;
    padding: 12px 24px;
    margin: 0;
    cursor: pointer;
    font-size: 1.7vh;
    // transition: 0.001s background-color ease-in-out;
  }
  &:hover {
    // background-color: #ffe082 !important;
    transform: scale(1.1);
  }
`;

export default StyledButton;
