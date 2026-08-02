import { FaMobileAlt, FaLaptop, FaHeadphones, FaCamera } from "react-icons/fa";

import { BsSmartwatch } from "react-icons/bs";
import { MdDesktopWindows, MdSportsEsports } from "react-icons/md";

const categories = [
  {
    name: "All",
    icon: "✨",
  },
  {
    name: "Phones",
    value: "Smartphones",
    icon: <FaMobileAlt />,
  },
  {
    name: "Laptops",
    value: "Laptops",
    icon: <FaLaptop />,
  },
  {
    name: "Headphones",
    value: "Headphones",
    icon: <FaHeadphones />,
  },
  {
    name: "Watches",
    value: "Smartwatches",
    icon: <BsSmartwatch />,
  },
  {
    name: "Cameras",
    value: "Cameras",
    icon: <FaCamera />,
  },
  {
    name: "Monitors",
    value: "Monitors",
    icon: <MdDesktopWindows />,
  },
  {
    name: "Standalone Console",
    value: "Standalone Consoles",
    icon: <MdSportsEsports />,
  },
];

function CategorySection({ selectedCategory, setSelectedCategory }) {
  return (
    <section className="bg-slate-50 py-32">
      <div className="w-full -100 px-6">
        <div className="flex text-center flex-col items-center justify-center gap-3 mt-5 pt-6">
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Browse by Category
          </h2>

          <p className="items-center justify-items-center mt-5 text-lg text-slate-500 max-w-2xl mx-auto">
            Discover premium technology across every category, carefully
            selected to deliver performance, innovation, and exceptional
            quality.
          </p>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="grid grid-cols-4 gap-15">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.value || category.name)}
              className={`group w-90 h-50 mx-auto cursor-pointer rounded-3xl border p-8 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                selectedCategory === category.name
                  ? "border-blue-300 bg-blue-50"
                  : "border-slate-200 bg-white hover:border-blue-200"
              }`}
            >
              <div className="flex justify-center">
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl text-4xl transition-all duration-300
${
  selectedCategory === (category.value || category.name)
    ? "bg-blue-400 text-white"
    : "bg-slate-100 text-slate-700 group-hover:bg-blue-400 group-hover:text-white"
}`}
                >
                  {category.icon}
                </div>
              </div>

              <h3 className="mt-8 text-center text-lg font-semibold text-slate-900">
                {category.name}
              </h3>
            </button>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
