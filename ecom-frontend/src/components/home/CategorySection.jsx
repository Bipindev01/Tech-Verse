import {
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
  FaCamera,
} from "react-icons/fa";

import { BsSmartwatch } from "react-icons/bs";

import { MdDesktopWindows } from "react-icons/md";

const categories = [
  {
    name: "Phones",
    icon: <FaMobileAlt />,
  },
  {
    name: "Laptops",
    icon: <FaLaptop />,
  },
  {
    name: "Headphones",
    icon: <FaHeadphones />,
  },
  {
    name: "Watches",
    icon: <BsSmartwatch />,
  },
  {
    name: "Cameras",
    icon: <FaCamera />,
  },
  {
    name: "Monitors",
    icon: <MdDesktopWindows />,
  },
];

function CategorySection() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        Shop By Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white rounded-2xl shadow-md p-8 text-center hover:-translate-y-2 hover:shadow-xl transition cursor-pointer"
          >
            <div className="text-5xl text-blue-600 flex justify-center mb-4">
              {category.icon}
            </div>

            <h3 className="font-semibold">
              {category.name}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default CategorySection;