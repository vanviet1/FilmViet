import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, onSnapshot, query, where, setDoc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { uploadImageToCloudinary, deleteImageFromCloudinary } from '../config/cloudiaryConfig';

export const fetchDocumentsRealtime = (collectionName, callback) => {
  const collectionRef = collection(db, collectionName);

  // Lắng nghe dữ liệu thay đổi trong thời gian thực
  const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });

    // Gọi callback với dữ liệu mới nhất
    callback(documents);
  });

  // Hàm trả về unsubscribe để có thể dừng lắng nghe khi không cần nữa
  return unsubscribe;
}; 

export const addDocument = async (collectionName, values) => {
  try {
    if (values.imgUrl) {
      const imgUrl = await uploadImageToCloudinary(values.imgUrl, collectionName);
      values.imgUrl = imgUrl;
    }

    const docRef = await addDoc(collection(db, collectionName), values);

    return {
      id: docRef.id,
      ...values,
    };
  } catch (error) {
    console.error('Error adding document:', error);
    throw error;
  }
};

  export const deleteDocument = async (collectionName, docId) => {

  // Xóa tài liệu khỏi Firestore
  await deleteDoc(doc(collection(db, collectionName), docId));
};
// Update a document in a given collection with an optional image upload
export const updateDocument = async (collectionName, values) => {
  const { id, ...newValues } = values;
  await updateDoc(doc(collection(db, collectionName), values.id), newValues);
};

// Lấy danh sách tài liệu theo điều kiện (email, role, ...)
export const getDocumentsByField = async (collectionName, field, value) => {
  const q = query(collection(db, collectionName), where(field, "==", value));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};