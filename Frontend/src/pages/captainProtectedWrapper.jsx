import React, { useContext, useEffect } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";

const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { captain , setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);    

    console.log("CaptainProtectedWrapper token:", token); // Debugging log

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token]);

  axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  })
  .then((response) => {
    if (response.status === 200) {
      setCaptain(response.data.captain);
      setIsLoading(false);
    }
    }).catch((error) => {
      console.error("Error fetching captain profile:", error);
      localStorage.removeItem("token");
      navigate("/captain-login");
    });

  if(isLoading){
    return <div>Loading...</div>;
  }

  return (
    <div>
      <>{children}</>
    </div>
  );
};

export default CaptainProtectedWrapper;
