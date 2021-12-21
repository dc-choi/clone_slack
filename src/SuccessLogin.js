import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId =
  "248077278329-q9kjf8grukacs6e30osrdg3h0vvd9rns.apps.googleusercontent.com";

function SuccessLogin() {
  const navigate = useNavigate();
  const onSignoutSuccess = () => {
    alert("로그아웃 되었습니다.");
    navigate("/signin");
    console.clear();
    // will: SuccessLogin에서 콘솔 지운 상태를 유지한 상태에서 signin으로 넘어가게
    /**window.sessionStorage.removeItem("access_token");
     * 로그아웃 성공하면 token지우기
     */
  };

  return (
    <div>
      <strong>구글 로그인에 성공하였습니다.</strong>
      <GoogleLogout
        clientId={clientId}
        buttonText="Sign Out"
        onLogoutSuccess={onSignoutSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default SuccessLogin;
