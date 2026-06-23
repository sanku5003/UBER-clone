import React, { useContext, useEffect , useState} from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [user, setUser] = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  } , [token]);

  axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((response) => {
    if (response.status === 200) {
      setUser(response.data.user);
      setIsLoading(false);
    }
    }).catch((error) => {
      console.error("Error fetching user profile:", error);
      localStorage.removeItem("token");
      navigate("/login");
    });


  return (
    <div>
      <>{children}</>
    </div>
  );
};

export default UserProtectedWrapper;
