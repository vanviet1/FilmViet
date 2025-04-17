import React, { useContext, useState, useEffect } from "react";
import logoglx from "../../../assets/logoglx.svg";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { ContextFormUi } from "../../../context/FormUiContext";
import { ContextAcount } from "../../../context/AcountProvider";
import { Link } from "react-router-dom";
import { listMenu } from "../../../utils/Contants";
import { listInformation } from "../../../utils/Contants";
import { ContextAuthen } from "../../../context/AuthenProvider";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { setStatusUiForm } = useContext(ContextFormUi);
  const [showDropdown, setShowDropdown] = useState(false);
    const { accountLogin, logout } = useContext(ContextAuthen);
    const location = useLocation();

  let dropdownTimeout;

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    if (location.pathname === "/") {
      // Trang chủ: header trong suốt và cuộn thì chuyển nền
      const handleScroll = () => {
        setScrolling(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // Các trang khác: header luôn có nền
      setScrolling(true);
    }
  }, [location.pathname]);
  

  return (
    <div
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolling ? "bg-black/90" : "bg-transparent"
    }`}
    >
      {/* phần header */}
      <div className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 py-2 text-white">
        {/* Toggle menu mobile */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <IoMdClose size={24} /> : <CiMenuBurger size={24} />}
        </div>

        {/* Logo */}

        <Link to={"/"}>
          <img className="w-[100px]" src={logoglx} alt="Galaxy Play" />
        </Link>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-8">
          {listMenu?.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="hover:text-blue-400">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>  
        {/* User info */}
        {!accountLogin ? (
        
          <button
            onClick={() => setStatusUiForm(true)}
            className="px-4 py-2 bg-black border border-white rounded-full hover:bg-white hover:text-black"
          >
            Đăng Nhập 
          </button>
         
        ) : (
          <div className="relative flex gap-3 items-center">
            <Link to={"/buyPackage"}>
              <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-600 transition">
                Mua gói
              </button>
            </Link>

            <FaBell className="size-6 cursor-pointer" />

            {/* Avatar + Dropdown */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => {
                clearTimeout(dropdownTimeout);
                setShowDropdown(true);
              }}
              onMouseLeave={() => {
                dropdownTimeout = setTimeout(() => {
                  setShowDropdown(false); 
                }, 500);
              }}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={accountLogin?.imgUrl}
                alt="Avatar"
              />

              {showDropdown && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-black text-white rounded-lg shadow-lg p-3"
                  onMouseEnter={() => clearTimeout(dropdownTimeout)}
                  onMouseLeave={() => {
                    dropdownTimeout = setTimeout(() => {
                      setShowDropdown(false);
                    }, 500);
                  }}
                >
                  <p className="text-sm pb-2 border-b border-gray-700">
                    {accountLogin?.name || accountLogin?.email}
                  </p>
                  <ul className="mt-2">
                    {listInformation?.map((item) => (
                      <li
                        className="py-1 hover:text-blue-400 cursor-pointer"
                        key={item.path}
                      >
                        <Link to={item.path} className="hover:text-blue-400">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={logout}
                    className="mt-2 w-full text-left px-3 py-2 bg-gray-800 rounded hover:bg-gray-700"
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-[#000300] text-white transition-all duration-500 ${
          nav ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="p-4">
          {listMenu?.map((item) => (
            <li className="p-4 border-b border-gray-700" key={item.path}>
              <Link to={item.path} className="hover:text-blue-400">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;