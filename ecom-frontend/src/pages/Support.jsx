import {
  FaTruck,
  FaUndoAlt,
  FaShieldAlt,
  FaQuestionCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaComments,
} from "react-icons/fa";

function Support() {
  const supportCards = [
    {
      title: "Shipping",
      description:
        "Fast and secure delivery across India with real-time order tracking.",
      icon: <FaTruck />,
    },
    {
      title: "Returns",
      description:
        "Easy 7-day returns and hassle-free replacements for eligible products.",
      icon: <FaUndoAlt />,
    },
    {
      title: "Warranty",
      description:
        "All products come with official manufacturer warranty and support.",
      icon: <FaShieldAlt />,
    },
    {
      title: "FAQs",
      description:
        "Find answers to the most commonly asked questions in one place.",
      icon: <FaQuestionCircle />,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero */}

      <section className="bg-linear-to-r from-slate-900 to-black text-white py-28">

        <div className="max-w-full mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.35em] text-blue-400 font-semibold">
            TECHVERSE SUPPORT
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold">
            Need Help?
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-full mx-auto leading-8">
            Whether you need help with orders, returns, warranty,
            or product information, our support team is always ready
            to assist you.
          </p>

        </div>

      </section>

      {/* Support Cards */}

<section className="py-20 bg-slate-50">
  <br />
  <br />

  <div className="max-w-[1800px] mx-auto pt-20 pb-24 px-8">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">

      {supportCards.map((card) => (

        <div
          key={card.title}
          className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition"
        >

          <div className="flex justify-center text-5xl text-blue-600">

            {card.icon}

          </div>

          <h2 className="mt-6 text-2xl font-bold text-slate-900">

            {card.title}

          </h2>

          <p className="mt-4 text-gray-600 leading-7">

            {card.description}

          </p>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* Contact Section */}

<section className="bg-white py-20 ">
<div className="absolute bottom-50 left-0 w-full h-10 bg-white z-20">
  <div className="max-w-full mx-auto px-6">

    <div className="text-center">

      <h2 className="text-5xl font-bold text-slate-900">

        Still Need Help?

      </h2>

      <p className="mt-5 text-lg text-gray-500">

        Reach out to our support team through your preferred method.

      </p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center hover:shadow-xl transition">
      <div className="flex justify-center items-center mb-6">
        <FaEnvelope className="mx-auto text-5xl text-blue-600" />
      </div>

        <h3 className="mt-6 text-2xl font-bold">

          Email

        </h3>

        <p className="mt-3 text-gray-600">

          support@techverse.com

        </p>

      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center hover:shadow-xl transition">
      <div className="flex justify-center items-center mb-6">
        <FaPhoneAlt className="mx-auto text-5xl text-green-600" />
      </div>

        <h3 className="mt-6 text-2xl font-bold">

          Phone

        </h3>

        <p className="mt-3 text-gray-600">

          +91 45451 15454

        </p>

      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center hover:shadow-xl transition">
      <div className="flex justify-center items-center mb-6">
        <FaComments className="mx-auto text-5xl text-purple-600" />
      </div>

        <h3 className="mt-6 text-2xl font-bold">

          Live Chat

        </h3>

        <p className="mt-3 text-gray-600">

          Available 24/7

        </p>

      </div>

      </div>
    </div>
  </div>

</section>

    </div>
  );
}

export default Support;