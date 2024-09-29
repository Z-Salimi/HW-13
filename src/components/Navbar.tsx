import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-slate-100 ">
      <div className="mx-auto max-w-[1540px] flex flex-col gap-10  md:flex-row items-center justify-between py-5 px-4">
      <div>
        <img src="../src/assets/react.svg" alt="Logo" className="w-14 ml-5" />
      </div>
      <div className="hidden md:flex gap-8 text-gray-500 mx-auto">
        <a href="#">Company</a>
        <a href="#">Services</a>
        <a href="#">FinTech Solutions</a>
        <a href="#">Products</a>
        <a href="#">Portfolio</a>
        <a href="#" className="md:border-b-2 border-green-600">
          Contact us
        </a>
      </div>
      <div className="flex flex-col items-center w-full md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="ml-5">
          <i className="fa fa-bars flex"></i>
        </button>
        {isOpen && (
          <div className="flex flex-col w-full gap-4 text-gray-500 mt-4 md:hidden">
            <a
              href="#"
              className="transition-all duration-300 text-gray-500 w-full p-3 text-center hover:bg-slate-500 hover:text-white"
            >
              Company
            </a>
            <a
              href="#"
              className="transition-all duration-300 text-gray-500 w-full p-3 text-center hover:bg-slate-500 hover:text-white"
            >
              Services
            </a>
            <a
              href="#"
              className="transition-all duration-300 text-gray-500 w-full p-3 text-center hover:bg-slate-500 hover:text-white"
            >
              FinTech Solutions
            </a>
            <a
              href="#"
              className="transition-all duration-300 text-gray-500 w-full p-3 text-center hover:bg-slate-500 hover:text-white"
            >
              Products
            </a>
            <a
              href="#"
              className="transition-all duration-300 text-gray-500 w-full p-3 text-center hover:bg-slate-500 hover:text-white"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="transition-all duration-300 text-gray-500 w-full p-3 text-center hover:bg-slate-500 hover:text-white"
            >
              Contact us
            </a>
          </div>
        )}
      </div>
      </div>
    </section>
  );
};
