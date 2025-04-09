import React from "react";
import { Button } from "@mui/material";

function LandingOut3() {
  return (
    <div className="pt-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Bạn có 2 cách để thưởng thức Galaxy Play
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
        <div>
          <img
            src="https://assets.glxplay.io/web/responsive/plain/section-6_1.jpg"
            alt="Bông Hồng Lửa"
            className="w-full h-auto rounded-lg"
          />

          <div className="mt-4">
              <h2 className="text-xl font-bold"> TIỆC “BUFFET” <span className=" ms-2 p-1 bg-yellow-400 text-black border rounded-lg">
            THUÊ PHIM LẺ
              </span></h2>
            <p className="mt-2">
              Chỉ 70K/tháng, thỏa thích xem
              <span className="font-bold">hàng ngàn bộ phim</span> gồm: Phim
              Việt bom tấn, phim bộ Độc Quyền Galaxy Play, phim Hollywood và
              Disney tuyển chọn và phim bộ Châu Á gay cấn, hấp dẫn.
            </p>
          </div>
        </div>
    
        <div>
          <img
            src="https://assets.glxplay.io/web/responsive/plain/section-6_2.jpg"
            alt="Bố Già"
            className="w-full h-auto rounded-lg"
          />

          <div className="mt-4">
            <h2 className="text-xl font-bold">CHỌN MÓN  <span className=" ms-2 p-1 bg-yellow-400 text-black border rounded-lg">
            THUÊ PHIM LẺ
              </span></h2>
            <p className="mt-2">
              Thưởng thức những bộ phim MỚI ngay sau rạp tại
              <span className="font-bold">Phim Thuê Đặc Sắc</span>, trên nền
              tảng Galaxy Play. <span className="text-yellow-300">Lưu ý</span>:
              Bạn không cần đăng ký mua Phim Gói, mà chỉ
              <span className="font-bold">trả theo từng Phim Thuê</span> mình
              yêu thích.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingOut3;
