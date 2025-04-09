import React, { createContext, useState, useEffect } from "react";
import { fetchDocumentsRealtime } from "../services/firebaseService";

export const ContextUsers = createContext(); 

export const UsersProvider = ({ children }) => { 
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Lắng nghe dữ liệu realtime từ collection "users"
        const unsubscribe = fetchDocumentsRealtime("users", (usersList) => {
            setUsers(usersList);
        });

        // Hủy lắng nghe khi component bị unmount
        return () => unsubscribe();
    }, []);

    return (
        <ContextUsers.Provider value={users}> {/* Truyền users đúng */}
            {children}
        </ContextUsers.Provider>
    );
};
