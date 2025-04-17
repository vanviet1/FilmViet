import React, { useContext } from 'react'
import { ContextAuthen } from '../../../../context/AuthenProvider';

function Account() {
   const { accountLogin, logout } = useContext(ContextAuthen);
  return (
   <div className='mt-40'>
     <div className="flex min-h-screen bg-gray-100 ">
    {/* Sidebar */}
    <div className="w-64 bg-white p-4 shadow">
      <nav className="mt-6 space-y-3 text-sm">
        <div className="bg-blue-100 text-blue-700 px-3 py-2 rounded flex items-center space-x-2">
          <i className="fas fa-user"></i>
          <span>Tài khoản</span>
        </div>
        <div className="px-3 py-2 hover:bg-gray-100 rounded">Quản lý kho phim</div>
        <div className="px-3 py-2 hover:bg-gray-100 rounded">Lịch sử xem</div>
      </nav>
    </div>

    {/* Main content */}
    <div className="flex-1 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Thông tin tài khoản</h2>
        <button className="text-blue-600 hover:underline">Chỉnh sửa</button>
      </div>

      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <div>
          <label className="block text-gray-600 text-sm mb-1">Họ và tên</label>
          <input type="text" value={ accountLogin?.name } readOnly className="w-full border rounded px-3 py-2 bg-gray-100" />
        </div>

        <div>
          <label className="block text-gray-600 text-sm mb-1">Email</label>
          <div className="flex items-center">
            <input type="email" value={accountLogin?.email} readOnly className="w-full border rounded px-3 py-2 bg-gray-100" />
            <span className="text-green-600 ml-2">✔</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <label className="block text-gray-600 text-sm mb-1">Mật khẩu</label>
            <input type="password" value="••••••" readOnly className="w-full border rounded px-3 py-2 bg-gray-100" />
          </div>
          <button className="text-blue-600 hover:underline ml-4 mt-6">Đổi mật khẩu</button>
        </div>
      </div>
    </div>
  </div>
   </div>
  )
}

export default Account