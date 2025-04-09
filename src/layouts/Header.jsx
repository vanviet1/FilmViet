import React, { useContext, useState, useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { ContextAcount } from "../context/AcountProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { users, setUsers } = useContext(ContextAcount);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownTimeout = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (users) {
      setUsers(null);
    navigate("/");
    }
  };

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setShowDropdown(false);
    }, 500);
  };

  return (
    <div className="bg-[#f4f5f7] flex items-center justify-between p-5">
      <div>
        <h5 className="text-[30px] text-gray-400">
          Good Morning,{" "}
          <b className="text-black font-bold">{users?.name || "Guest"}</b>
        </h5>
        <p className="text-[15px] text-gray-400">
          Your performance summary this week
        </p>
      </div>

      <div className="flex items-center gap-3">
        <IoSearchSharp className="text-[25px]" />
        <MdOutlineEmail className="text-[25px]" />
        <FaRegBell className="text-[25px]" />
        
        <div
          className="relative cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="w-10 h-10 rounded-full"
            src={
              users?.imgUrl ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="Avatar"
          />

          {showDropdown && (
            <div
              className="absolute right-0 mt-2 w-48 bg-black text-white rounded-lg shadow-lg p-3 z-10"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p className="text-sm pb-2 border-b border-gray-700">
                {users?.name || users?.email}
              </p>

              <button
                onClick={handleLogout}
                className="mt-2 w-full text-left px-3 py-2 bg-gray-800 rounded hover:bg-gray-700"
              >
                Đăng xuất
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
