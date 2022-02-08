import React from "react";
import "../css/LoginGoogle.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function LoginGoogle() {
  const navigate = useNavigate();

  // 서버 요청
  const onLoginSuccess = (res) => {
    // 브라우저 상에서 로그인한 사용자 이름 저장
    // => 로그인 후에 워크스페이스 만드는 사용자 이름 저장 위함
    const userName = { name: res.profileObj.name };
    window.localStorage.setItem("userName", JSON.stringify(userName));
    // window.localStorage.getItem("userName");
    axios({
      method: "post",
      url: "http://localhost:9000/api/auth/googleLogin",
      data: {
        profileObj: res.profileObj,
        tokenObj: res.tokenObj,
      },
    })
      .then((res) => {
        navigate("./SetupWorkspace");
        console.log("Login Success: ", res.profileObj);
      })
      .catch((error) => console.log("error: ", error.res));
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  return (
    <>
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
    </>
  );
}

export default LoginGoogle;
