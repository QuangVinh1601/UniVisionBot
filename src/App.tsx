import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AdBanner from './components/AdBanner';
import Home from './pages/Home';
import Careers from './pages/Careers';
import CareerGuidanceTest from './pages/CareerGuidanceTest';
import WhatToStudy from './pages/WhatToStudy';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  const location = useLocation();
  // Kiểm tra nếu đang ở trang đăng nhập hoặc đăng ký
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/forgot-password';

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
        <hr className="border-t border-gray-300" />
      </div>
      <div className={`flex flex-1 mt-16 ${isAuthPage ? 'justify-center' : ''}`}>
        {/* Hiển thị banner nếu không phải trang đăng nhập hoặc đăng ký */}
        {!isAuthPage && (
          <>
            <AdBanner position="left" />
            <hr className="border-l border-gray-300" />
          </>
        )}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/career-guidance-test" element={<CareerGuidanceTest />} />
            <Route path="/what-to-study" element={<WhatToStudy />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
          </Routes>
        </main>
        {/* Hiển thị banner nếu không phải trang đăng nhập hoặc đăng ký */}
        {!isAuthPage && (
          <>
            <hr className="border-r border-gray-300" />
            <AdBanner position="right" />
          </>
        )}
      </div>
      <hr className="border-t border-gray-300" />
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
