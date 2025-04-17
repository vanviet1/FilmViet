import React, { useContext } from "react";
import { ContextFormUi } from "../../../../context/FormUiContext";

function LandingOut5() {
   const { setStatusUiRegisterForm ,setStatusUiForm } = useContext(ContextFormUi);
  return (
    <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-between">
      {/* Phần nội dung bên trái */}
      <div className="w-full ">
        <h2 className="text-3xl font-bold">
          Không chèn quảng cáo khi xem phim
        </h2>
        <p className="mt-4 text-lg">
          Tận hưởng trọn vẹn, không gián đoạn mỗi phút giây cảm xúc khi thưởng
          thức bộ phim yêu thích.
        </p>
        <button 
        onClick={() => {
          setStatusUiRegisterForm(true);
          setStatusUiForm(false);
        }}
        className="mt-6 px-6 py-3 bg-black border border-white font-semibold rounded-full hover:bg-white hover:text-black transition">
          Đăng ký ngay
        </button>
      </div>

      {/* Phần hình ảnh bên phải */}
      <div className="w-full  flex justify-center mt-8 md:mt-0">
        <img
          src="https://assets.glxplay.io/web/responsive/plain/WEB-GP_1221_TV_KID_500x460.png"
          alt="TV"
          className="w-[400px] md:w-[500px] object-contain"
        />
      </div>
    </div>
  );
}

export default LandingOut5;
