import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Main from "./page/home/Main";
import Login from "./page/member/Login";
import Join from "./page/member/Join";
import { useRecoilValue } from "recoil";
import { userInfo } from "./recoil/UserAtom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import LocationMap from "./page/LocationMap/LocationMap";
import ScrollToTop from "./hooks/useScrollTop";
import Search from "./page/search/Search";

function App() {
  const loginInfo = useRecoilValue(userInfo);
  const location = useLocation();

  return (
    <div>
      {(location.pathname === "/map" || location.pathname === "/search") && <Header userInfo={loginInfo} />}
      <Routes>
        <Route path="/" element={loginInfo.status ? <Main /> : <Login />} />
        <Route path="/home" element={<Main />} />
        <Route path="/login" element={loginInfo.status ? <Navigate to="/home" /> : <Login />} />
        <Route path="/join" element={loginInfo.status ? <Navigate to="/home" /> : <Join />} />
        <Route path="/map" element={<LocationMap />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

const RootApp = () => (
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);

export default RootApp;
