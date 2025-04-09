import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { ContextPackages } from "../../../context/PackagesProvider";
import { ContextPlans } from "../../../context/PlansProvider";
import { filterByid, getObjectById } from "../../../utils/FunctionConvert";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { initialOptions } from "../../../utils/Contants";
const paymentMethods = [
  {
    id: "credit",
    label: "Thẻ tín dụng",
    icons:
      "https://assets.glxplay.io/static/files/payment-partner-icon-card-group_1654075215587.png",
  },
  {
    id: "momo",
    label: "Ví MoMo",
    icon: "https://assets.glxplay.io/static/files/payment-partner-icon-momo_1654075216608.png",
  },
  {
    id: "zalopay",
    label: "Ví ZaloPay",
    icon: "https://assets.glxplay.io/static/files/payment-partner-icon-zalopay_1653369858746.png",
  },
  {
    id: "shopeepay",
    label: "Ví ShopeePay",
    icon: "https://assets.glxplay.io/static/files/shopeepay-square-icon-orange-1652176986113_1653297609551.png",
  },
  {
    id: "vnpay",
    label: "VNPAY",
    icon: "https://assets.glxplay.io/staticv2/VNPayQR-1705996522.png",
  },
];

function PayPackage() {

  const { id } = useParams();
  const [pack, setPack] = useState([]);
  const packages = useContext(ContextPackages);
  const plans = useContext(ContextPlans);
  const [goi, setGoi] = useState({});
  const goiChoose = useRef(goi);
  const price = useRef("0");
  useEffect(() => {
    const data = filterByid(packages, id, "plan").sort((a, b) => a.time - b.time);
    setPack(data);
    setGoi(data[0]);
  }, [id, packages]);

  useEffect(() => {
    goiChoose.current = goi ;
    price.current = getObjectById(plans, id)?.pricePerMonth *
    goi?.time -
    (getObjectById(plans, id)?.pricePerMonth *
    goi?.time *
    goi?.discount) /100 ;
  }, [goi]);


const createSubscription = () => {
 
}
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 pt-16">
      <h2 className="text-3xl font-bold text-gray-800">
        Phương thức thanh toán
      </h2>
      <p className="text-gray-500 mb-8">Hủy bất cứ lúc nào</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Cột trái */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Thời hạn Gói Mobile</h3>
            <FormControl component="fieldset" sx={{ width: "100%" }}>
              <RadioGroup>
                {pack.map((e, i) => (
                    <FormControlLabel
                      value={e.id}
                      checked={e.id === goi.id}
                      onChange={() => setGoi(e)}
                      control={<Radio />}
                      label={
                        <div className="flex justify-between gap-40">
                          <div>
                            <h1>{e.time} Tháng</h1>
                            <h1 className="text-red-600 w-32">
                              Tiết kiệm {e.discount}%
                            </h1>
                          </div>
                          <div>
                          <h1 className="font-semibold">
                              {parseInt(
                                getObjectById(plans, id)?.pricePerMonth *
                                  e.time -
                                  (getObjectById(plans, id)?.pricePerMonth *
                                    e.time *
                                    e.discount) /
                                    100
                              ).toLocaleString("vi-VN")}{" "}
                              vnd
                            </h1>
                            <h1 className="text-gray-600 line-through">
                              {parseInt(
                                getObjectById(plans, id)?.pricePerMonth * e.time
                              ).toLocaleString("vi-VN")}{" "}
                              vnd
                            </h1>
                          
                          </div>
                        </div>
                      }
                    />
                  ))}
              </RadioGroup>
            </FormControl>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">THÔNG TIN THANH TOÁN</h3>
            <p className="text-gray-600">
              Tài khoản: <strong>0378 486 992</strong>
            </p>
            <p className="text-gray-600">
              Tên gói: <strong>{getObjectById(plans, id)?.title}</strong>
            </p>
            <p className="text-gray-600">
              Thời hạn: <strong>{goi?.time} tháng</strong>
            </p>
            <p className="text-gray-600">
              Ngày hiệu lực: <strong>28/03/2025</strong>
            </p>
            <p className="text-gray-600">
              Tự động gia hạn: <strong>28/03/2026</strong>
            </p>
            <p className="text-lg font-bold text-blue-600 mt-2">
            Tổng cộng:  {parseInt(
                                getObjectById(plans, id)?.pricePerMonth *
                                  goi?.time -
                                  (getObjectById(plans, id)?.pricePerMonth *
                                  goi?.time *
                                  goi?.discount) /100).toLocaleString("vi-VN")}{" "} vnd </p>
          </div>
        </div>

        {/* Cột phải */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold">Chọn phương thức thanh toán</h3>
          <div className="grid grid-cols-5 gap-4 mt-4">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                className="p-4 border rounded-lg flex items-center justify-center"
              >
                <img src={method.icon} alt={method.label} className="h-8" />
              </button>
            ))}
          </div>

          {/* Form nhập thẻ */}
          <div className="mt-6 space-y-4">
          <PayPalScriptProvider options={initialOptions}>
                            <PayPalButtons
                                style={{ layout: "vertical" }}
                                createOrder={(data, actions) => {
                                    const currentPackage = goiChoose.current;
                                    const total = price.current;

                                    if (!currentPackage) {
                                        alert("Vui lòng chọn gói trước khi thanh toán.");
                                        return;
                                    }
                                    const priceInUSD = (total / 24000).toFixed(2); // Chuyển từ VND sang USD
                                    return actions.order.create({
                                        purchase_units: [{
                                            amount: {
                                                value: priceInUSD
                                            }
                                        }]
                                    });
                                }}
                                onApprove={(data, actions) => {
                                    return actions.order.capture().then((details) => {
                                        const transactionId = details.id; // Lấy ID giao dịch từ PayPal
                                        createSubscription(transactionId);
                                    });
                                }}
                                onError={(err) => {
                                    console.error("PayPal error:", err);
                                }}
                            />
                        </PayPalScriptProvider>
          </div>
        </div>
      </div>

      {/* Nút thanh toán */}
      <button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
        Thanh toán
      </button>

      <p className="text-gray-500 text-sm mt-4">
        Xem kho phim và thanh toán sau
      </p>
    </div>
  );
}

export default PayPackage;
