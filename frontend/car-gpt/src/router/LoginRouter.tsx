/*
시작페이지 Router
@author 조혜안
@since 2023.11.25
*/
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Login from "pages/Login";
import { useRecoilValue } from "recoil";
import { atomIsLogin } from "recoil/atomIsLogin";

function LoginRouter() {
  const isLogin = useRecoilValue(atomIsLogin);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin === false) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default LoginRouter;
