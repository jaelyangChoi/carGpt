/*
메인 페이지
@author 조혜안
@since 2023.11.05
*/
import React from "react";
import { Container, Grid } from "@mui/material";
import logoText from "assets/logo_text.png";

export default function Home() {
  return (
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
        <Grid item xs={12}>
          메인 페이지
        </Grid>
      </Grid>
    </Container>
  );
}
