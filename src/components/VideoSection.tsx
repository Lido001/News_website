// import React from "react";

// const VideoSection: React.FC = () => {
//   return (
//     <div className="w-full p-8 bg-white">
//       <h2 className="text-3xl font-bold mb-6 text-center">🎥 Featured Videos</h2>
//       <div className="flex justify-center">
//         <iframe
//           width="560"
//           height="315"
//           src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//           title="News Video"
//           className="rounded-lg shadow-lg"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default VideoSection;


import { useRef } from "react";
import { PlayCircle } from "lucide-react"; // Import Play Icon

const videoData = [
  {
    id: 1,
    title: "SpaceX Launch: A New Era of Exploration",
    description: "Watch the latest SpaceX rocket launch into orbit.",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    title: "AI Robots: The Future of Automation",
    description: "Explore how AI is shaping the world of robotics.",
    videoSrc: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  },
  {
    id: 3,
    title: "Breaking News: Global Climate Summit",
    description: "World leaders discuss climate change initiatives.",
    videoSrc: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
  },
  {
    id: 4,
    title: "Sports Highlights: World Cup 2026",
    description: "Catch the top moments from the latest matches.",
    videoSrc: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 5,
    title: "The Rise of Quantum Computing",
    description: "Discover how quantum computing is evolving.",
    videoSrc: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4",
  },
  {
    id: 6,
    title: "The Evolution of Electric Cars",
    description: "A look at the advancements in EV technology.",
    videoSrc: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
  },
];

const VideoSection = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleHover = (index: number) => {
    if (videoRefs.current[index]) {
      const videoElement = videoRefs.current[index];
      videoElement?.play(); // Autoplay in original position
    }
  };

  const handleLeave = (index: number) => {
    if (videoRefs.current[index]) {
      const videoElement = videoRefs.current[index];
      videoElement?.pause(); // Pause when mouse leaves
    }
  };

  const handleClick = (index: number) => {
    if (videoRefs.current[index]) {
      const videoElement = videoRefs.current[index];
      if (videoElement?.requestPictureInPicture) {
        videoElement.requestPictureInPicture().catch((error) => {
          console.error("PiP failed:", error);
        });
      }
    }
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Recommended For You</h2>
      <div className="grid grid-cols-3 gap-6">
        {videoData.map((video, index) => (
          <div
            key={video.id}
            className="relative card bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:bg-red-500 hover:text-white"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleLeave(index)}
          >
            {/* Video */}
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={video.videoSrc}
              className="w-full h-40 object-cover cursor-pointer"
              muted
              loop
              onClick={() => handleClick(index)}
            />

            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-12 h-12 text-white opacity-70 hover:opacity-100 transition-opacity" />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{video.title}</h3>
              <p className="text-sm">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;


