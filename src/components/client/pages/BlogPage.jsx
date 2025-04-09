import React from 'react'

function BlogPage() {
    const blogPosts = [
        {
          id: 1,
          title: "Top 10 bộ phim Việt không thể bỏ lỡ trong năm 2024",
          description: "Danh sách những bộ phim Việt đặc sắc đã và sẽ ra mắt năm 2024 mà bạn nhất định phải xem.",
          image: "https://images.unsplash.com/photo-1601933470928-c6f3c9ba1f3d?auto=format&fit=crop&w=800&q=80",
          author: "Admin",
          date: "8 Tháng 4, 2025",
        },
        {
          id: 2,
          title: "Bí quyết thưởng thức phim tại nhà như rạp",
          description: "Tạo không gian tại gia như rạp chiếu phim chỉ với vài mẹo đơn giản.",
          image: "https://images.unsplash.com/photo-1587049352851-f379c8f1a73b?auto=format&fit=crop&w=800&q=80",
          author: "Galaxy Team",
          date: "6 Tháng 4, 2025",
        },
        {
          id: 3,
          title: "Xu hướng phim Hàn Quốc: Tình cảm, giật gân hay cổ trang?",
          description: "Phim Hàn Quốc đang chuyển mình như thế nào? Thị hiếu người xem thay đổi ra sao?",
          image: "https://images.unsplash.com/photo-1620405111890-3fe2b3b23b0f?auto=format&fit=crop&w=800&q=80",
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