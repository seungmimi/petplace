import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/home/Main';
import Login from './page/member/Login';
import Join from './page/member/Join';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/join" element={<Join />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
