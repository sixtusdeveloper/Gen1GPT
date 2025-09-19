import { createContext, use, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyChats, dummyUserData } from "../assets/assets";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  //   DUMMY USER FETCH
  const fetchUser = async () => {
    // setUser(); // Replace with actual user fetch logic
    setUser(dummyUserData); // Replace with actual user fetch logic
  };

  const fetchUsersChats = async () => {
    // Fetch chats logic here
    setChats(dummyChats); // Replace with fetched chats
    setSelectedChat(dummyChats[0]);
  };

  //   THEME HANDLING
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  //   USER & CHAT HANDLING
  useEffect(() => {
    if (user) {
      fetchUsersChats();
    } else {
      setChats([]);
      setSelectedChat(null);
    }
  }, [user]);

  //   USER FETCH ON MOUNT
  useEffect(() => {
    fetchUser();
  }, []);

  //   CONTEXT VALUE
  const value = {
    user,
    setUser,
    navigate,
    chats,
    setChats,
    selectedChat,
    setSelectedChat,
    theme,
    setTheme,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppContext;
