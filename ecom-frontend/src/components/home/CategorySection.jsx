import { FaMobileAlt, FaLaptop, FaHeadphones, FaCamera } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";
import { MdDesktopWindows, MdSportsEsports } from "react-icons/md";
import { motion } from "framer-motion";

const categories = [
  {
    name: "All",
    value: "All",
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
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="max-w-[1980px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - Better spacing */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Browse by Category
          </h2>
        </div>
          <br/>
        {/* Categories Grid - Fixed card sizing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-4 md:gap-5">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedCategory(category.value)}
              className={`group relative flex flex-col items-center justify-center p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 
                ${
                  selectedCategory === category.value
                    ? "border-blue-300 bg-blue-50 shadow-md"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg hover:-translate-y-1"
                }
              `}
            >
              {/* Icon Container - Fixed height so "All" doesn't float */}
              <div
                className={`flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-xl text-2xl md:text-3xl transition-all duration-300
                  ${
                    selectedCategory === category.value
                      ? "bg-blue-500 text-white shadow-md shadow-blue-200"
                      : "bg-slate-100 text-slate-700 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-200"
                  }
                `}
              >
                {category.icon}
              </div>

              {/* Category Name */}
              <h3 className="mt-3 text-sm md:text-base font-semibold text-slate-800">
                {category.name}
              </h3>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;