import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagramSquare } from "react-icons/fa"
import { SiZalo } from "react-icons/si";
import logoglx from "../../../assets/logoglx.svg";
import chplay from "../../../assets/taichplay.webp"
import appstore from "../../../assets/taiappstore.webp"
import tembct from "../../../assets/bct.webp"
const Footer = () => {
    return (
        <div className='bg-black'>
             <div className='max-w-[1240px] mx-auto py-16 px-4'>
             <div className="flex justify-center lg:justify-start">
                    <img className="w-[130px]" src={logoglx} alt="Galaxy Play" />
                </div>
                <div className='grid lg:grid-cols-3 gap-8  text-white mt-4'>

              
             <div>
           
            <p>Galaxy Play là dịch vụ được cung cấp bởi Công ty Cổ Phần Galaxy Play, 
                thành viên của Công ty Cổ Phần Giải Trí và Giáo Dục Galaxy (GEE.,JSC)</p>
                <p className='pt-4'>Địa chỉ: 59 Võ Nguyên Giáp, Phường Thảo Điền,
                     Thành Phố Thủ Đức, Thành Phố Hồ Chí Minh, Việt Nam.</p>  
                <p className='pt-4'>Mã số doanh nghiệp: 0106539659.</p>
                <p className='pt-4'>Ngày cấp mã số doanh nghiệp: 15/5/2014. </p>
                <p className='pt-4'>Nơi cấp: Sở kế hoạch và đầu tư thành phố Hà Nội.</p>
                <img className="w-[120px] pt-4"  src={tembct} alt="" />

           
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-8 ">
          <div>
            <h5 className="font-medium text-gray-400 mb-4">Giới thiệu</h5>
            <ul>
              <li className="py-2 text-sm">Quy chế sử dụng Dịch vụ</li>
              <li className="py-2 text-sm">Chính sách bảo mật</li>
              <li className="py-2 text-sm">Khuyến mãi</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-gray-400 mb-4">Hỗ trợ</h5>
            <ul>
              <li className="py-2 text-sm">1900 8675 (24/7)</li>
              <li className="py-2 text-sm">play@galaxy.com.vn</li>
              <li className="py-2 text-sm">https://galaxyplay.vn/help</li>
            </ul>
          </div>
        </div>
            <div className=''>
            <h5 className='font-medium text-gray-400'>Tải ứng dụng</h5>
            <div className='flex justify-start items-center my-4 gap-2 '>
                    <img className='w-[150px]' src={chplay} alt="" />
                    <img className='w-[150px]' src={appstore} alt="" />
            </div>
            <h6 className='font-medium text-gray-400'>Kết nối với chúng tôi</h6>
            <div className='flex items-center gap-4 my-6'>
                <FaFacebook  size={35}/>
                <FaYoutube  size={35}/>
                <FaTwitter  size={35}/>
                <FaInstagramSquare  size={35}/>
                <SiZalo className='p-1 bg-white text-black rounded' size={35}/>
            </div>
            </div>
        </div>
        </div>
          <div className="border-t border-gray-700 mt-6">
        <p className="text-center text-sm text-gray-500 py-4">
          © 2025 Galaxy Play. All rights reserved.
        </p>
      </div>
        </div>
    );
};

export default Footer;