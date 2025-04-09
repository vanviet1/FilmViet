import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaElementor } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { IoMdArrowDropright } from "react-icons/io";
import { menu } from '../utils/Contants';
import { RiArrowDownSFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import {PATH_ROUTERS_ADMIN} from '../config/path'

const Sidebar = () => {

    const [expandedItems, setExpandedItems] = useState(false);
    const [show, isShow] = useState(false);


    const toggleSubItem = (id) => {
        setExpandedItems((prevExpandedItems) => ({

            [id]: !prevExpandedItems[id],
        }));
    };

    const handleShow = () => {
        isShow(!show)
    }

    return (
        <div className={`bg-[#f4f5f7] pr-10 ${!show ? "md:h-[100vh]" : ""}`}>
            
            <div className="flex gap-5 items-center py-7 p-[20px]">
                <FaBars onClick={handleShow} />
                <Link to={PATH_ROUTERS_ADMIN.DASHBOARD}>
                <div className={`text-left p-5 ${!show ? "hidden" : ""}   `}>
                    <img src="https://demo.bootstrapdash.com/star-admin2-free/template/images/logo.svg" alt="" />
                </div>
                </Link>
            
            </div>

            
            <div className={`   ${!show ? 'max-md:h-[0px] overflow-hidden' : 'duration-300'}`}>
                <Link to={PATH_ROUTERS_ADMIN.DASHBOARD}>
                <div className="flex gap-3 items-center bg-[#fff] hover:bg-slate-900 hover:text-white py-3 rounded-tr-lg  rounded-br-lg  p-[20px] mr-4">
                    <LuMenuSquare className='text-[20px]' />
                    
                    <div className={`${!show ? "hidden w-[0px]" : ""}`}>
                        <span className='font-semibold'>Dashboard</span>
                    </div>
                </div>
                
                </Link>
               
                <div className={`text-left p-5 ${!show ? "hidden" : ""}`}>
                    <span className="font-semibold">UI Elements</span>
                </div>

            <Link to={PATH_ROUTERS_ADMIN.CATEGORIES}>
            
            <div className="flex gap-3 items-center bg-[#fff] hover:bg-slate-900 hover:text-white py-3 rounded-tr-lg  rounded-br-lg  p-[20px] mr-4  mt-3">
                    <FaElementor className='text-[20px] ' />
                    <div className={`${!show ? "hidden" : ""}`}>
                        <span >Categories</span>
                    </div>
                </div>
            
            </Link>

                

                <div className={`text-left p-5  ${!show ? "hidden" : ""}`}>
                    <span className='font-semibold'>Forms and Datas</span>
                </div>


                {menu?.map((item) => (
                    <div className='mt-3'>
                        <div onClick={() => toggleSubItem(item.id)} className={` flex gap-3 items-center bg-[#fff] hover:bg-slate-900 hover:text-white py-3 rounded-tr-lg  rounded-br-lg  p-[20px] mr-4`}>
                                <div>
                                    {item.icon}
                                </div>
                                <p className={`font-semibold ml-2 ${!show ? "hidden" : ""}`}>{item.title}</p>
                                <div className='ml-auto'>
                                    {!expandedItems[item.id] ? (
                                        <IoMdArrowDropright className={` text-gray-400 ${!show ? "hidden" : ""}`} />
                                    ) : (
                                        <RiArrowDownSFill className={` text-gray-400 ${!show ? "hidden" : ""}`} />
                                    )}
                                </div>
                        </div>
                        <div>
                            {item?.items?.map((subItem) => (
                                <div key={subItem.id} className={`cursor-pointer hover:bg-[#fff] mx-2 mt-1 rounded-md duration-300 ${!expandedItems[item.id] ? "h-[0px] overflow-hidden" : "h-[50px]"} `}>
                                    <Link to={subItem?.path}>
                                        <span className='block p-3 '>
                                            {subItem?.title}
                                        </span>
                                    </Link>

                                </div>
                            ))
                            }</div>

                    </div>
                ))}



                <div className={`text-left ml-2 ${!show ? "hidden" : ""}`}>
                    <span className='font-semibold'>PAGES</span>
                </div>

                <Link to={PATH_ROUTERS_ADMIN.USER_PAGES}>
                <div className="flex gap-3 items-center bg-[#fff] hover:bg-slate-900 hover:text-white py-3 rounded-tr-lg  rounded-br-lg  p-[20px] mr-4">
                        <PiUsersThreeDuotone className='text-[20px] ' />
                        <p className={`text-left ${!show ? "hidden" : ""}`}>User Pages</p>
                        <IoMdArrowDropright className={`text-[30px] text-gray-400 ml-auto ${!show ? "hidden" : ""}`} />
                </div>
                </Link>
                


                <div className={`text-left p-5 ${!show ? "hidden" : ""}   `}>
                <span className='font-semibold'>HELP</span>
                                
                </div>

                    <Link to={PATH_ROUTERS_ADMIN.PROFILE}>
                <div className="flex gap-3 items-center bg-[#fff] hover:bg-slate-900 hover:text-white py-3 rounded-tr-lg  rounded-br-lg  p-[20px] mr-4  mt-3">
                    <FaRegUserCircle className='text-[20px] ' />
                    <div className={`flex gap-3 items-center ${!show ? "hidden w-[0px]" : ""}`}>
                        <span>Profile</span>
                    </div>
                </div>
                    </Link>
            </div>
        </div>
    );
};

export default Sidebar;