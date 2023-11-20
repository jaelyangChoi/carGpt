/*
메인 페이지
@author 조혜안
@since 2023.11.05
*/
import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import logoText from "assets/logo_text.png";
import Button from "components/common/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigator = useNavigate();

  return (
    <div id="container">
      <Grid container spacing={30}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid item>
              <img src={logoText} width="70%" />
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "1vh" }}>
              <Typography variant="h5" color="primary">
                ChatGPT 기반 차량 추천 서비스
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "4vh" }}>
              <Button
                width="350px"
                bgcolor="#00287A"
                fontcolor="#ffffff"
                onClick={() => {
                  navigator(`/detail`);
                }}
              >
                시작하기
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  );
}
