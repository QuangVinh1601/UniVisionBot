import React from 'react';
import duytan from '../images/duytan.png';
import donga from '../images/donga.png';
interface AdBannerProps {
  position: 'left' | 'right';
}

const AdBanner: React.FC<AdBannerProps> = ({ position }) => {
  return (
    <div className={`w-1/4 bg-white ${position === 'left' ? 'order-first' : 'order-last'}`}>
      <div className="p-4">
        <a href="https://duytan.edu.vn/tuyen-sinh/Page/Home.aspx" target="_blank" rel="noopener noreferrer">
          <img
            src={duytan}
            alt="Advertisement"
            className="cursor-pointer rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </a>
        <br />
        <a href="https://donga.edu.vn/tuyensinh" target="_blank" rel="noopener noreferrer">
          <img
            src={donga} 
            alt="Advertisement"
            className="cursor-pointer rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </a>
        
      </div>
    </div>
  );
};

export default AdBanner;