import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="UNI VISION BOT" className="h-10 w-auto" />
          <h2 className="text-2xl font-semibold text-black ml-2">UNI VISION BOT</h2>
        </Link>
        <nav>
          <ul className="flex space-x-10">
            <li><Link to="/" className="text-gray-700 hover:text-green-500">Trang chủ</Link></li>
            <li><Link to="/careers" className="text-gray-700 hover:text-green-500">Các ngành nghề</Link></li>
            <li><Link to="/career-guidance-test" className="text-gray-700 hover:text-green-500">Trắc nghiệm hướng nghiệp</Link></li>
            <li><Link to="/what-to-study" className="text-gray-700 hover:text-green-500">Học nghề gì</Link></li>
            <li><Link to="/login" className="text-gray-700 hover:text-green-500">Đăng nhập</Link></li>
            <li><Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded">Đăng ký</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;