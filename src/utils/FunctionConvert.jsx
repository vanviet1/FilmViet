export const getObjectById = (data,id) => {
    return data?.find( e => e.id == id) || "unknown";
}

export const filterByid = (data,id,name) => {
     return data?.filter(e => e[name] == id);
}

export const formatCommentTime = (commentDate) => {
    const now = new Date();
    const createdAt = commentDate.toDate();
    // Tính toán chênh lệch thời gian
    const diffInMilliseconds = now - createdAt;

    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    if (diffInMinutes < 60) {
        return `${diffInMinutes} minutes ago`; // Hiển thị số phút trước nếu dưới 1 giờ
    } else if (diffInHours < 24) {
        return `${diffInHours} hours ago`; // Hiển thị số giờ trước nếu dưới 1 ngày
    } else if (diffInDays <= 10) {
        return `${diffInDays} days ago`; // Hiển thị số ngày trước nếu từ 1 đến 10 ngày
    } else {
        return formatFirebaseTimestamp(commentDate); // Hiển thị ngày bình luận nếu quá 10 ngày
    }
};

// Function to format Firebase timestamp and calculate expiry date
export const formatFirebaseTimestamp = (timestamp, additionalDays = 0) => {
    const date = new Date(timestamp.seconds * 1000);
    date.setDate(date.getDate() + additionalDays);
    return date.toLocaleDateString('vi-VN'); // Convert to Vietnamese date format
};