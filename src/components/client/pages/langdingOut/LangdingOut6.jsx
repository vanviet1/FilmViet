import React from "react";
import { partner } from "../../../../utils/Contants";
function LandingOut6() {
 

  return (
    <div className="py-10  text-center">
      <h2 className="text-xl font-semibold mb-6">Các đối tác của Galaxy Play</h2>
      <div className="flex flex-wrap justify-center items-center gap-3">
        {partner.map((item, index) => (
          <img
            key={index}
            src={item.imgUrl}
            alt={item.title}
            className="h-8 md:h-10 "
          />
        ))}
      </div>
    </div>
  );
}

export default LandingOut6;
