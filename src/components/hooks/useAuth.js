import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

// this is the custom hook anywhere can use
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
