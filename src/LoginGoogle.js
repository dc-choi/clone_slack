import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function LoginGoogle() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
    setIsLogin(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    setShowloginButton(true);
    setShowlogoutButton(false);
    setIsLogin(false);
  };

  const onLogout = () => {
    if (window.gapi) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      if (auth2 !== null) {
        auth2
          .signOut()
          .then(auth2.disconnect().then(() => onSignoutSuccess()))
          .catch((e) => console.log(e));
      }
    }
  };

  return (
    <>
      {isLogin ? (
        <>
          {showlogoutButton ? (
            <button type="button" onClick={onLogout}>
              logout
            </button>
          ) : null}
        </>
      ) : (
        <>
          {showloginButton ? (
            <GoogleLogin
              clientId={clientId}
              buttonText="구글로 로그인"
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />
          ) : null}
        </>
      )}
    </>
  );
}

export default LoginGoogle;
