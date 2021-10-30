import { Card } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import swal from "sweetalert";
import googleImg from "../../../images/google.png";
import Footer from "../../Footer/Footer";

import useAuth from "../../hooks/useAuth";

import "./Login.css";
// login page
const Login = () => {
  const { signInWithGoogle, setUser } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const redirect = location.state?.from || "/";

  const handelGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        swal("Good job!", "Account has been created!", "success");
        history.push(redirect);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <div className="login-box">
        <Card className="card-box shadow">
          <div className="all-services">
            <div className="heading-border">
              <h2 className="text-center">Sign In</h2>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-2">
            <div>
              <img className="img-fluid" src={googleImg} alt="" />
            </div>
            <div>
              <button onClick={handelGoogleSignIn} className="btn-regular">
                Sign In with Google
              </button>
            </div>
          </div>
        </Card>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Login;
