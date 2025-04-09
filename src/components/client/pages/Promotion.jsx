import React from 'react'

function Promotion() {

    const promotions = [
        {
          id: 1,
          title: "🎉 Tặng 30 ngày xem phim miễn phí",
          description: "Đăng ký tài khoản mới để nhận ngay 1 tháng trải nghiệm miễn phí toàn bộ phim trên nền tảng!",
          image: "https://images.unsplash.com/photo-1606821153800-096f62532326?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 2,
          title: "🔥 Mua 1 tháng tặng 1 tháng",
          description: "Chỉ áp dụng trong tháng này! Nạp gói tháng và nhận thêm 1 tháng sử dụng hoàn toàn miễn phí.",
          image: "https://images.unsplash.com/photo-1630409348124-e63c1492df3a?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 3,
          title: "🎁 Ưu đãi 50% cho học sinh - sinh viên",
          description: "Nhập mã SV2024 khi thanh toán để được giảm giá gói xem phim 50%.",
          image: "https://images.unsplash.com/photo-1600880292100-3f9fdb9a4d50?auto=format&fit=crop&w=800&q=80",
        },
      ];
  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4 sm:px-6 md:px-20">
      {/* Banner chính */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-2xl shadow-lg text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">ƯU ĐÃI CỰC HOT THÁNG 4 🎬</h1>
        <p className="text-lg md:text-xl">Nhanh tay nắm bắt các khuyến mãi hấp dẫn từ Galaxy Movie</p>
      </div>

      {/* Danh sách khuyến mãi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img src={promo.image} alt={promo.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">{promo.title}</h3>
              <p className="text-gray-700 text-sm">{promo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Promotion