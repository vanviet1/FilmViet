import React, { useContext } from 'react'
import { ContextFormUi } from '../../../../context/FormUiContext';

function LangdingOut7() {
  const { setStatusUiRegisterForm ,setStatusUiForm } = useContext(ContextFormUi);
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center text-center ">
  <div className="text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Thoải mái xem phim trên TV tại nhà
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Đắm chìm trong từng thước phim cùng công nghệ hình ảnh 4K sắc nét
          và dải âm thanh Dolby 5.1 sống động duy nhất tại Việt Nam.
        </p>
        <button 
        onClick={() => {
          setStatusUiRegisterForm(true);
          setStatusUiForm(false);
        }}
        className="bg-transparent border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
          Đăng ký ngay
        </button>
      </div>

    
      <div className="mt-10">
        <img
          src="https://assets.glxplay.io/web/responsive/plain/TV-tizen.png"
          alt="ảnh"
          className="w-full max-w-4xl rounded-lg shadow-lg"
        />
      </div>

      {/* Phần Giới thiệu vũ trụ điện ảnh */}
      <div className="text-center mt-16 px-4">
        <h2 className="text-2xl md:text-4xl font-bold">
          Vũ trụ giải trí điện ảnh, đậm màu sắc Việt.
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold">
        Chất lượng tuyệt đỉnh, trải nghiệm mượt mà.
        </h2>
       
      </div>
    </div>
  )
}

export default LangdingOut7