// import React from "react";

// const hotNews = [
//   { title: "Political Shifts Across the Globe", content: "World leaders discuss pressing issues at the global summit." },
//   { title: "Stock Market Crash?", content: "Investors worry as the markets see a sudden dip." },
//   { title: "AI Revolution", content: "How artificial intelligence is transforming industries worldwide." },
// ];

// const HotNews: React.FC = () => {
//   return (
//     <div className="w-full bg-gray-100 p-8">
//       <h2 className="text-3xl font-bold mb-6 text-center">🔥 Hot News</h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {hotNews.map((news, index) => (
//           <div key={index} className="p-4 bg-white shadow-md rounded-lg">
//             <h3 className="text-xl font-semibold">{news.title}</h3>
//             <p className="text-gray-600 mt-2">{news.content}</p>
//             <button className="mt-4 text-blue-600 hover:underline">Read More</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HotNews;

import React from "react";
import europe_political from "../assets/hot_news/u4219834676_Create_an_The_Atlantic_style_illustration_to_acco_5ef22a8b-a2f0-4dc2-a8fb-71d36ebe50af_1-750x420.jpg";
import cta from "../assets/hot_news/CTA_CES_2025_Opening_Day_Keynote.jpg";
import uno from "../assets/hot_news/greenhouse-gas-emission-2024.jpg";
import economy from "../assets/hot_news/IMF.jpg";
import elon from "../assets/hot_news/Elon_Musk_at_MSC_2006.jpg";
import robot from "../assets/hot_news/images.jpg";
import kholi from "../assets/hot_news/images (1).jpg";
import movie from "../assets/hot_news/Copy of G2 Cover.jpg";
import energy from "../assets/hot_news/images (2).jpg";
import fire from "../assets/icons8-fire.gif";

// import "animate.css"; // For reveal animations

const hotNews = [
  {
    id: 1,
    title: "Political Tensions Rise in Europe",
    description: "Leaders discuss measures to address increasing conflicts.",
    image: europe_political,
    link: "https://www.socialeurope.eu/europes-last-chance-unite-or-fall-apart",
  },
  {
    id: 2,
    title: "Tech Innovations at CES 2025",
    description: "Groundbreaking gadgets showcased at the annual tech event.",
    image: cta,
    link: "https://www.prnewswire.com/in/news-releases/ces-2025-the-global-stage-for-innovation-connecting-the-world-creating-the-future-302348542.html",
  },
  {
    id: 3,
    title: "New Climate Policies Announced",
    description:
      "Governments worldwide are committing to stricter regulations.",
    image: uno,
    link: "https://www.un.org/en/climatechange/net-zero-coalition",
  },
  {
    id: 4,
    title: "Economic Growth Predictions for 2025",
    description: "Analysts predict major shifts in global financial markets.",
    image: economy,
    link: "https://www.imf.org/en/Publications/WEO",
  },
  {
    id: 5,
    title: "SpaceX Plans Next Mars Mission",
    description: "Elon Musk reveals ambitious plans for 2026 Mars landing.",
    image: elon,
    link: "https://en.wikipedia.org/wiki/SpaceX_Mars_colonization_program",
  },
  {
    id: 6,
    title: "AI in Healthcare: The Future",
    description:
      "Doctors embrace artificial intelligence for better treatment.",
    image: robot,
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8285156/",
  },
  {
    id: 7,
    title: "Record-Breaking Sports Performance",
    description: "A new world record has been set in the athletics world.",
    image: kholi,
    link: "https://en.wikipedia.org/wiki/Virat_Kohli",
  },
  {
    id: 8,
    title: "Hollywood’s Next Big Blockbuster",
    description: "Movie enthusiasts eagerly await the biggest release of 2025.",
    image: movie,
    link: "https://www.thehindu.com/entertainment/movies/25-biggest-hollywood-releases-to-look-forward-to-in-2025/article69046189.ece",
  },
  {
    id: 9,
    title: "Breakthrough in Renewable Energy",
    description: "Scientists unveil new methods for sustainable power.",
    image: energy,
    link: "https://instituteofsustainabilitystudies.com/insights/lexicon/the-future-of-renewable-energy-innovations-and-breakthroughs/",
  },
];

const HotNews: React.FC = () => {
  return (
    <section className="container align-middle mx-auto">
      <div className="flex items-center justify-center mb-8 gap-x-3"><img src={fire} alt="" />
      <h2 className="text-3xl font-bold text-center ">Hot News</h2>
      
      </div>

      <div className="grid grid-cols-3 gap-6">
        {hotNews.map((news) => (
          <div
            key={news.id}
            className="flex items-center card bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:bg-red-500 hover:text-white"
          >
            {/* News Image (1/4 width on the left) */}
            <img
              src={news.image}
              alt={news.title}
              className="w-1/2 object-cover"
            />

            {/* News Content */}
            <div className="p-4 w-3/4">
              <h3 className="text-lg font-bold">{news.title}</h3>
              <p className="text-sm mt-2">{news.description}</p>

              <div className="mt-3">
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

export default HotNews;
