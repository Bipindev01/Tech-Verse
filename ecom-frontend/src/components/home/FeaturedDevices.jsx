import iphone from "../../assets/showcase/iphone18series.jpg";
import macbook from "../../assets/showcase/macbookair.jpg";
import playstation from "../../assets/showcase/playstation5.png";


const devices = [
  {
    id: 1,
    title: "iPhone 17 Series",
    subtitle: "Meet the latest iPhone lineup.",
    image: iphone,
    dark: false,
  },
  {
    id: 2,
    title: "MacBook Air",
    subtitle: "Supercharged by Apple Silicon.",
    image: macbook,
    dark: false,
  },
  {
    id: 3,
    title: "PlayStation 5",
    subtitle: "Next-generation gaming starts here.",
    image: playstation,
    dark: false,
  },
];

function FeaturedDevices() {
  return (
    <>
      {devices.map((device) => (
        <section
          key={device.id}
          className="relative h-screen overflow-hidden"
        >
          {/* Background Image */}
          <img
            src={device.image}
            alt={device.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          {device.dark && (
            <div className="absolute inset-0 bg-black/30" />
          )}

          {/* Content */}
          <div className="absolute inset-17 z-10 flex  h-full flex-col items-center justify-start pt-32 text-center">
            <h2
              className={`text-5xl md:text-7xl font-semibold ${
                device.dark ? "text-white" : "text-black"
              }`}
            >
              {device.title}
            </h2>

            <p
              className={`mt-4 text-xl md:text-2xl ${
                device.dark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {device.subtitle}
            </p>

            <div className="mt-8 flex gap-5">
              <button className="rounded-full bg-blue-600 px-7 py-3 text-white hover:bg-blue-700 transition">
                Learn More
              </button>

              <button
                className={`rounded-full border px-7 py-3 transition ${
                  device.dark
                    ? "border-white text-white hover:bg-white hover:text-black"
                    : "border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                Shop
              </button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default FeaturedDevices;