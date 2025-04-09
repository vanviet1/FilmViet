import React from "react";
import { Button } from "@mui/material";

function LandingOut2() {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-bold">1</h1>
            <h2 className="text-3xl font-semibold">Tài khoản Galaxy Play Cao Cấp</h2>
          </div>
          <div>
            <h1 className="text-6xl font-bold">5</h1>
            <h2 className="text-3xl font-semibold">Thiết bị</h2>
          </div>
          <div>
            <h1 className="text-6xl font-bold">4</h1>
            <h2 className="text-3xl font-semibold">Thiết bị song song cùng lúc</h2>
          </div>
          <button className="mt-6 px-6 py-3 bg-black border border-white font-semibold rounded-full hover:bg-white hover:text-black transition">
          Đăng ký ngay
        </button>
        </div>

        <div className="flex justify-center">
          <img
            src="https://assets.glxplay.io/web/responsive/w1000/Spotlight%20on%20Device_VER2%20X1.png"
            alt="Devices"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingOut2;
