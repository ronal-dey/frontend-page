import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";

function GoogleAuth() {
  const responseGoogle = (response) => {
    if (response.accessToken) {
      axios
        .post("/api/google-auth", { token: response.accessToken })
        .then((res) => {
          // Handle successful authentication
          console.log("Authenticated successfully:", res.data);
        })
        .catch((err) => {
          // Handle authentication failure
          console.error("Authentication failed:", err);
        });
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId="9449278827-gqc71jhir1rsl6pgrtu0dv2ndbe5rstj.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default GoogleAuth;
