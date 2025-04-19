import React, { createContext, useState, useEffect } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";

// Tạo Context cho bình luận
export const ContextComments = createContext();

// Provider để cung cấp dữ liệu bình luận cho các component con
export const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Lắng nghe dữ liệu bình luận từ Firebase Realtime
    const unsubscribe = fetchDocumentsRealtime("comments", (commentsList) => {
        setComments(commentsList);  // Cập nhật trạng thái với danh sách bình luận
    });

    // Hủy lắng nghe khi component bị unmount
    return () => unsubscribe();
  }, []);

  return (
    <ContextComments.Provider value={comments}>
      {children}
    </ContextComments.Provider>
  );
};
