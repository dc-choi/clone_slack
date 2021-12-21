import React from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

// will: 구글 로그인 버튼 스타일링
// import styled from "styled-components";
// styled(GoogleLogin)`
//   user-select: none;
//   outline: none;
//   cursor: pointer;
//   align-items: center;
//   position: relative;
//   justify-content: center;
//   text-align: center;
//   white-space: nowrap;
//   -webkit-appearance: none;
//   -webkit-tap-highlight-color: transparent;
//   display: flex;
//   padding: 0;

//   height: 44px;
//   width: 100%;
//   max-width: 100%;
//   min-width: 96px;

//   /* 버튼 */
//   background-color: #fff;
//   border: 2px solid #4285f4;
//   border-radius: 4px;

//   /* 폰트 */
//   color: #4285f4;
//   font-size: 18px;
//   font-weight: 900;
// `;

const clientId =
  "248077278329-q9kjf8grukacs6e30osrdg3h0vvd9rns.apps.googleusercontent.com";

function LoginGoogle() {
  const navigate = useNavigate();
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    navigate("/SuccessLogin");

    // 구글 로그인 성공하면 화면 전환(=> SuccessLogin.js)
  };
  /**
   * window.sessionStorage.setItem("access_token", response.accessToken);
   * 로그인 할 때 성공하면 token저장
   */

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Google 계정으로 로그인"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

// will: 백엔드로 token보내기

export default LoginGoogle;
