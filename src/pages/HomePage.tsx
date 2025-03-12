// import React from "react";

// const HomePage: React.FC = () => {
//   return (
//     <div className="container mx-auto mt-10 p-5">
//       <h1 className="text-3xl font-bold">Welcome to News World</h1>
//       <p className="mt-4">Your daily source of news and updates.</p>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import Header from "../components/Header";
import HotNews from "../components/HotNews";
import RandomNews from "../components/RandomNews";
import VideoSection from "../components/VideoSection";
import news from "../assets/icons8-news.gif";

const HomePage: React.FC = () => {
  return (
    <div className="container px-6">
      <Header />
      <div className="flex flex-col items-center mb-12">
      <HotNews/>
      </div>
      <div className="flex items-center justify-center mb-12 gap-x-3">
      <img className="w-10" src={news} alt="" />
      <h1 className="text-4xl font-bold text-center ">Random News</h1>
      </div>
      <div className="bg-gray-100 flex flex-col items-center">
        
      <RandomNews/>
      </div>
      <VideoSection/>
      
      
    </div>
  );
};

export default HomePage;

