import { useEffect, useRef } from "react";

import iphoneVideo from "../../assets/videos/Enhancer-Ultra HD-iphone 17 pro.mp4";
import macbookVideo from "../../assets/videos/macbook new - Trim.mp4";
import playstation from "../../assets/videos/playstation5 new - Trim.mp4";

const devices = [
  {
    id: 1,
    title: "iPhone 17 Series",
    subtitle: "Meet the latest iPhone lineup.",
    image: null,
    video: iphoneVideo,
    white: true,
  },
  {
    id: 2,
    title: "MacBook Air",
    subtitle: "Supercharged by Apple Silicon.",
    image: null,
    video: macbookVideo,
    white: true,
  },
  {
    id: 3,
    title: null,
    subtitle: null,
    image: null,
    video: playstation,
    dark: false,
  },
  // {
  //   id: 3,
  //   title: "PlayStation 5",
  //   subtitle: "Next-generation gaming starts here.",
  //   image: playstation,
  //   video: null,
  //   dark: false,
  // },
];

function FeaturedDevices() {
  const videoRefs = useRef([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((section, index) => {
      const video = videoRefs.current[index];

      if (!section || !video) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            video.currentTime = 0;
            video.play().catch(() => {});
          } else {
            video.pause();
            video.currentTime = 0;
          }
        },
        {
          threshold: 0.6,
        },
      );

      observer.observe(section);

      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      {devices.map((device, index) => (
        <section
          key={device.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="relative h-screen overflow-hidden bg-black mb-70"
        >
          <>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-b from-transparent via-white/1 to-white z-20"></div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-white/40 blur-2xl z-30"></div>
          </>

          {/* Background */}

          {device.video ? (
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-[105%] object-cover"
            >
              <source src={device.video} type="video/mp4" />
            </video>
          ) : (
            <img
              src={device.image}
              alt={device.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Overlay */}

          {device.dark && <div className="absolute inset-0 bg-black/35" />}

          {/* Content */}

          <div className="absolute inset-17 z-10 flex  h-full flex-col items-center justify-start pt-32 text-center">
            {device.title && (
              <h2
                className={`text-5xl md:text-7xl font-semibold ${
                  device.white ? "text-white" : "text-black"
                }`}
              >
                {device.title}
              </h2>
            )}

            {device.subtitle && (
              <p
                className={`mt-4 text-xl md:text-2xl ${
                  device.white ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {device.subtitle}
              </p>
            )}

            {device.id !== 3 ? (
              <div className="mt-8 flex gap-5">
                <button className="rounded-full bg-blue-600 px-7 py-3 text-white transition hover:bg-blue-700">
                  Learn More
                </button>

                <button
                  className={`rounded-full border px-7 py-3 transition ${
                    device.white
                      ? "border-white text-white hover:bg-white hover:text-black"
                      : "border-black text-black hover:bg-black hover:text-white"
                  }`}
                >
                  Shop
                </button>
              </div>
            ) : (
              <div className="absolute bottom-45 left-1/2 -translate-x-1/2 flex gap-5">
                <button className="rounded-full bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700">
                  Learn More
                </button>

                <button className="rounded-full border border-white px-8 py-3 text-white transition hover:bg-white hover:text-black">
                  Shop
                </button>
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}

export default FeaturedDevices;
