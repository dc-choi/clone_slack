import React, { useState } from "react";
import "../css/LoginGoogle.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function LoginGoogle() {
  const [showloginButton, setShowloginButton] = useState(true);
  const navigate = useNavigate();

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    navigate("/SetupWorkspace");
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  return (
    <>
      {showloginButton ? (
        <GoogleLogin
          className="c-button c-button--primary c-button--large c-third_party_auth c-google_login full_width"
          type="button"
          clientId={clientId}
          buttonText="Google 계정으로 로그인"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}
    </>
  );
}

export default LoginGoogle;
