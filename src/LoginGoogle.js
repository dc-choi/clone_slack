import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId =
  "248077278329-q9kjf8grukacs6e30osrdg3h0vvd9rns.apps.googleusercontent.com";

function LoginGoogle() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    // 자동 로그인 방지 위한 코드 => 문제 해결 안됨
    window.sessionStorage.setItem("access_token", res.accessToken);

    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    // 자동 로그인 방지 위한 코드 => 문제 해결 안됨
    window.sessionStorage.removeItem("access_token");

    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <div>
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

      {/**자동 로그인 현상 테스트를 위한 코드,
       * 로그인 -> 구글 로그인 창 뜸 -> 로그인 성공 -> 로그아웃 -> 다시 로그인할 때 구글 로그인 창이 안뜨고 자동 로그인이 됨
       */}
      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="로그아웃"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
}

export default LoginGoogle;
