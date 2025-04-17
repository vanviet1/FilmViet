import React, { useContext } from 'react';
import { ContextFormUi } from '../../../../context/FormUiContext';

function LandingOut4() {
   const { setStatusUiRegisterForm ,setStatusUiForm } = useContext(ContextFormUi);
  return (
    
    <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">
  
      <div className="w-full">
        <div className=" p-2 w-[300px] md:w-[350px]">
          <img
            src="https://assets.glxplay.io/web/responsive/w500/home-page-iphone-12-pro-max.png"
            alt="Reply 1988"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Phần nội dung */}
      <div className="w-full mt-8 md:mt-0">
        <h2 className="text-3xl font-bold">
          Nội dung đặc sắc, trải nghiệm mượt mà trên thiết bị di động
        </h2>
        <ul className="mt-4 space-y-2 text-lg">
          <li>1 tài khoản Galaxy Play Mobile</li>
          <li>1 Smartphone hoặc máy tính bảng</li>
          <li>Xem mọi lúc, mọi nơi!</li>
        </ul>
        <button  onClick={() => {
                setStatusUiRegisterForm(true);
                setStatusUiForm(false);
              }}
               className="mt-6 px-6 py-3 bg-black border border-white font-semibold rounded-full hover:bg-white hover:text-black transition">
          Đăng ký ngay
        </button>
      </div>
    </div>
  );
}

export default LandingOut4;
