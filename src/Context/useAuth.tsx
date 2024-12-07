import { createContext, useEffect, useState } from "react";
import { UserProfile } from "../Models/User";
import { useNavigate } from "react-router-dom";
import { registerAPI, loginAPI } from "../Services/AuthService";
import { toast } from "react-toastify";
import React from "react";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (email: string, username: string, password: string) => void;
  loginUser: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    const tokenFromStorage = localStorage.getItem("token");

    if (userFromStorage && tokenFromStorage) {
      setUser(JSON.parse(userFromStorage));
      setToken(tokenFromStorage);
    }
    setIsReady(true);
  }, []);

  const registerUser = async (
    email: string,
    username: string,
    password: string
  ) => {
    try {
      const res = await registerAPI(email, username, password);
      if (res) {
        const { token, userName, email } = res.data;
        localStorage.setItem("token", token);
        const userObj = { userName, email };
        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(token);
        setUser(userObj);
        toast.success("Registration Success!");
        navigate("/search");
      }
    } catch (error) {
      toast.warning("Server error occurred");
    }
  };

  const loginUser = async (username: string, password: string) => {
    try {
      const res = await loginAPI(username, password);
      if (res && res.data.token) {
        const { token, userName, email } = res.data;
        localStorage.setItem("token", token);
        const userObj = { userName, email };
        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(token);
        setUser(userObj);
        toast.success("Login Success!");
        navigate("/search");
      }
    } catch (error) {
      toast.warning("Server error occurred");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    navigate("/");
  };

  const isLoggedIn = () => !!user;

  return (
    <UserContext.Provider
      value={{ user, token, loginUser, logout, isLoggedIn, registerUser }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
