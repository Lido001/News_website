// import React from "react";

// const randomNews = [
//   { image: "https://source.unsplash.com/400x300/?nature", title: "Climate Change: What's Next?", content: "Experts warn of extreme weather patterns." },
//   { image: "https://source.unsplash.com/400x300/?science", title: "Space Exploration", content: "NASA announces new mission to Mars." },
//   { image: "https://source.unsplash.com/400x300/?sports", title: "Football Championship", content: "Who will win the ultimate prize?" },
// ];

// const RandomNews: React.FC = () => {
//   return (
//     <div className="w-full p-8">
//       <h2 className="text-3xl font-bold mb-6 text-center">📰 Random News</h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {randomNews.map((news, index) => (
//           <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
//             <img src={news.image} alt="News" className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold">{news.title}</h3>
//               <p className="text-gray-600 mt-2">{news.content}</p>
//               <button className="mt-4 text-blue-600 hover:underline">Read More</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RandomNews;
 // Import the Readmore component

 
 import ai_robot from "../assets/news_images/Tech-Giants-AI-Race.png";
 import renewable from "../assets/news_images/Professor Henry Snaith EDIT_0.png";
 import fifa from "../assets/news_images/_adf0ca22-1e22-11e7-89d6-c3c500e93e5a.png";
 import stock from "../assets/news_images/Share-Market-2.png";
 import space_x from "../assets/news_images/download.png";
 import medical from "../assets/news_images/AI-in-healthcare2.png";
 
 const randomNews = [
   {
     id: 1,
     title: "SpaceX's Starship Makes Successful Test Flight",
     description: "Elon Musk’s Starship rocket reaches new heights.",
     image: space_x,
     link: "https://www.space.com/space-exploration/private-spaceflight/spacex-loses-starship-upper-stage-again-but-catches-giant-super-heavy-booster-during-flight-8-launch-video", // External link
   },
   {
     id: 2,
     title: "AI Breakthrough in Medical Diagnostics",
     description: "Researchers develop AI that predicts diseases early.",
     image: medical,
     link: "https://www.foreseemed.com/artificial-intelligence-in-healthcare", // Internal route
   },
   {
     id: 3,
     title: "Stock Market Sees Record Highs in 2025",
     description: "Wall Street hits a new all-time high.",
     image: stock,
     link: "https://www.thehindubusinessline.com/markets/stock-market-highlights-10-march-2025/article69309413.ece", // External link
   },
   {
     id: 4,
     title: "World Cup 2026: Teams Prepare for the Tournament",
     description: "Top teams begin training ahead of the next World Cup.",
     image: fifa,
     link: "https://en.wikipedia.org/wiki/2026_FIFA_World_Cup", // Internal route
   },
   {
     id: 5,
     title: "New Renewable Energy Breakthrough",
     description: "Scientists discover a new sustainable energy source.",
     image: renewable,
     link: "https://www.ox.ac.uk/news/2024-08-09-solar-energy-breakthrough-could-reduce-need-solar-farms", // External link
   },
   {
     id: 6,
     title: "Tech Giants Compete in AI Race",
     description: "Google, Microsoft, and OpenAI launch new AI models.",
     image: ai_robot,
     link: "https://futureskillsacademy.com/blog/ai-tech-race/", // Internal route
   },
 ];
 
 const RandomNews = () => {
   return (
     <section className="container ">
       {/* <h1 className="text-4xl font-bold text-center mb-12">📰 Random News</h1> */}
       <div className="grid grid-cols-3 gap-6 p-6">
         {randomNews.map((news) => (
           <div
             key={news.id}
             className="card bg-white rounded-lg overflow-hidden shadow-lg transition-colors duration-300 hover:bg-red-500 hover:text-white"
           >
             <div className="overflow-hidden h-1/2 rounded-t-lg">
             <img
               src={news.image}
               alt={news.title}
               className="w-full  object-cover card-img transition-transform duration-300"
             />
             </div>
             <div className="p-4">
               <h3 className="text-lg font-semibold">
                 {news.title}
               </h3>
               <p className="text-sm mt-3 ">
                 {news.description}
               </p>
               <div className="mt-6">
               <a className="read-more" href={news.link}>
                  <span className="font-medium font-montserrat tracking-wider">
                    Read More . . .
                  </span>
                </a>
               </div>
             </div>
           </div>
         ))}
       </div>
     </section>
   );
 };
 
 export default RandomNews;
 

