import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Bắt đầu với null để xử lý trạng thái tải

  useEffect(() => {
    // Kiểm tra trạng thái xác thực khi khởi tạo
    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(storedAuthStatus === "true");
  }, []);

  useEffect(() => {
    if (isAuthenticated !== null) { // Chỉ cập nhật localStorage nếu đã kiểm tra
      localStorage.setItem("isAuthenticated", isAuthenticated);
    }
  }, [isAuthenticated]);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; 
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
