import React, { useContext, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { ContextPlans } from "../../../context/PlansProvider";
import { ContextFeatures } from "../../../context/FeatureProvider";
import { filterByid } from "../../../utils/FunctionConvert";
import { Link } from "react-router-dom";

export default function BuyPackage() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const plans = useContext(ContextPlans)
  const features = useContext(ContextFeatures)
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 pt-20">
      {/* Tiêu đề */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Chọn gói Galaxy Play</h2>
      <p className="text-gray-500 mb-8">Hủy bất cứ lúc nào</p>

      {/* Danh sách gói */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setSelectedPlan(plan)}
            className={`relative p-6 rounded-lg shadow-lg border-2 transition-all ${
              selectedPlan?.id === plan.id ? "border-blue-500" : "bg-white"
            }`}
          >
            {/* Header VIP */}
            {plan.level === "VIP" && (
              <div className="absolute top-0 left-0 w-full bg-red-500 text-white text-sm font-semibold py-1 text-center rounded-t-lg">
                Xem không giới hạn
              </div>
            )}

            {/* Tiêu đề gói */}
            <h3 className="text-xl font-bold text-gray-800 mt-4">{plan.title}</h3>
            <p className="text-gray-600 text-lg font-semibold mt-2">{plan.price}</p>

            {/* Danh sách lợi ích */}
            <ul className="mt-4 space-y-2 text-gray-700">
              {filterByid(features,plan.id,"plan").map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  {feature.available === "Yes" ? (
                    <FaCheck className="text-blue-500" />
                  ) : (
                    <FaTimes className="text-red-500" />
                  )}
                  {feature.text}
                </li>
              ))}
            </ul>

            {/* Nút chọn gói */}
          
          </div>
        ))}
      </div>

      {/* Nút tiếp tục */}
      {selectedPlan && (
       <Link to ={`/payPackage/${selectedPlan.id}`}>
        <button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
          Tiếp tục
        </button>
        </Link>
      )}

      {/* Ghi chú */}
      <p className="text-gray-500 text-sm mt-4">
        Xem kho phim và đăng ký gói sau
      </p>
    </div>
  );
}
