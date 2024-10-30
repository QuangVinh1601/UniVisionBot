import React from 'react';
import image1 from '../images/image1.jpg'; 
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
const Home: React.FC = () => {
  return (
    <div className="relative ">
      <img src={image1} alt="Background" className="w-full h-full object-cover mb-4" />
      <h1 className="text-4xl font-semibold text-black text-center my-4">GIỚI THIỆU UNI VISION BOT</h1>
      <img src={image2} alt="Image2" className="w-full h-full object-cover my-4"/>
      <img src={image3} alt="Image3" className="w-full h-full object-cover my-4"/>

      {/* Chat Button */}
      <div className="fixed bottom-4 right-2">
        <button className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 flex items-center">
          <span className="mr-2">Chat tư vấn - giải đáp mọi thắc mắc</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
