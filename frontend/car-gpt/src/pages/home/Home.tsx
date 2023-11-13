/*
메인 페이지
@author 조혜안
@since 2023.11.05
*/
import React from "react";
import { Container, Grid } from "@mui/material";
import logoText from "assets/logo_text.png";
import Button from "components/common/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigator = useNavigate();

  return (
    <div>
      <Container id="container">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Grid
            item
            // xs={12}
            sx={{
              matginBottom: "5vh",
            }}
          >
            <img src={logoText} width="70%" />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "5vh" }}>
            <Button width="30%" bgcolor="#00287A" fontcolor="#ffffff" onClick={() => {
        navigator(`/detail`);
      }}>
              시작하기
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
