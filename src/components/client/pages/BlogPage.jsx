import React from 'react'

function BlogPage() {
    const blogPosts = [
        {
          id: 1,
          title: "Top 10 bộ phim Việt không thể bỏ lỡ trong năm 2024",
          description: "Danh sách những bộ phim Việt đặc sắc đã và sẽ ra mắt năm 2024 mà bạn nhất định phải xem.",
          image: "https://mtg.1cdn.vn/2024/12/28/pngtree-film-film-black-gold-quality-photosensitive-effect-dark-blue-gradient-background-image_901105.jpg",
          author: "Admin",
          date: "8 Tháng 4, 2025",
        },
        {
          id: 2,
          title: "Bí quyết thưởng thức phim tại nhà như rạp",
          description: "Tạo không gian tại gia như rạp chiếu phim chỉ với vài mẹo đơn giản.",
          image: "https://avalo.vn/wp-content/uploads/2025/03/nhu-cau-thiet-ke-rap-chieu-phim-tai-gia-cua-nhieu-gia-dinh-tang-cao.jpg",
          author: "Galaxy Team",
          date: "6 Tháng 4, 2025",
        },
        {
          id: 3,
          title: "Xu hướng phim Hàn Quốc: Tình cảm, giật gân hay cổ trang?",
          description: "Phim Hàn Quốc đang chuyển mình như thế nào? Thị hiếu người xem thay đổi ra sao?",
          image: "https://photo2.tinhte.vn/data/attachment-files/2023/08/6999505_top-10-bo-phim-xuyen-khong-han-quoc-hap-dan-nhat-khong-the-roi-mat-202102202230513687-750x436.jpg",
          author: "Biên tập viên",
          date: "1 Tháng 4, 2025",
        },
      ];
      
  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 md:px-20 pt-24 pb-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">📰 Tin Tức & Blog</h1>
        <p className="text-gray-600 text-lg">Cập nhật các bài viết mới nhất về điện ảnh và giải trí</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">{post.description}</p>
              <div className="mt-4 text-sm text-gray-400 flex justify-between">
                <span> {post.author}</span>
                <span> {post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogPage