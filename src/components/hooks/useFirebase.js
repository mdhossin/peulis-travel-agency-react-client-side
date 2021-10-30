import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import initializeAuthentication from "../Firebase/firebase.init";

//initialize firebase  authentication
initializeAuthentication();
// custom hook
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  const [isLoading, setIsLoading] = useState(true);

  //on State Change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  //google sign in
  const signInWithGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // sign out
  const signOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        swal("Logout Successful!", "You are logged out!", "success");
      })
      .catch((err) => {
        swal("Something went wrong!", `${err.message}`, "error");
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    setUser,
    signOutUser,
    signInWithGoogle,
  };
};

export default useFirebase;
