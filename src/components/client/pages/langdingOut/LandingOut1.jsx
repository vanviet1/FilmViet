import React, { useContext } from 'react';
import { moviesImg } from '../../../../utils/Contants';
import { partnerImg } from '../../../../utils/Contants';
import { Button } from '@mui/material';
import { ContextFormUi } from '../../../../context/FormUiContext'
function LandingOut1() {
  const { setStatusUiRegisterForm ,setStatusUiForm } = useContext(ContextFormUi);
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Tiêu đề chính và thông tin */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Giải trí online không giới hạn hàng nghìn giờ nội dung đậm chất Việt
          </h1>
          <ul className="text-lg mb-6 space-y-2">
            <li>Bom tấn Việt chiếu rạp độc quyền và sớm nhất</li>
            <li>Thư viện phim Việt lớn nhất Việt Nam</li>
            <li>Phim Bộ độc quyền Galaxy Play</li>
            <li>Phim Bộ Hot Châu Á</li>
            <li>Siêu phẩm điện ảnh Hollywood và Disney</li>
          </ul>
          <button onClick={() => {
                setStatusUiRegisterForm(true);
                setStatusUiForm(false);
              }} className="mt-6 px-6 py-3 bg-black border border-white font-semibold rounded-full hover:bg-white hover:text-black transition">
          Đăng ký ngay
        </button>
          {/* Đối tác sản xuất phim */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">100+ đối tác sản xuất phim trong nước và quốc tế</h2>
            <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 justify-center">
              {partnerImg.slice(0, 4).map((item, index) => (
                <div key={index} className="flex justify-center">
                  <img src={item.imgUrl} alt="" className="h-12 md:h-16 object-contain" />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center mt-6">
              {partnerImg.slice(4, 6).map((item, index) => (
                <div key={index} className="flex justify-center">
                  <img src={item.imgUrl} alt="" className="h-10 md:h-12 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Danh sách phim nổi bật */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {moviesImg.map((movie, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img src={movie.imgUrl} alt={movie.title} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingOut1;