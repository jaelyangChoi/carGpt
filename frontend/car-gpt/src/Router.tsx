/*
Router 설정
@author 조혜안
@since 2023.11.05
*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
