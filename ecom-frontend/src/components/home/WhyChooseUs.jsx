import {
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaUndo,
} from "react-icons/fa";

const features = [
  {
    title: "Fast Delivery",
    icon: <FaTruck />,
  },
  {
    title: "Secure Payment",
    icon: <FaShieldAlt />,
  },
  {
    title: "24/7 Support",
    icon: <FaHeadset />,
  },
  {
    title: "Easy Returns",
    icon: <FaUndo />,
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose TechVerse?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center"
            >
              <div className="text-5xl text-blue-600 flex justify-center mb-4">
                {feature.icon}
              </div>

              <h3 className="font-bold text-xl">
                {feature.title}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;