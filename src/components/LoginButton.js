import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="login1 btn btn-light" onClick={() => loginWithRedirect()}>LOGIN</button>;
};

export default LoginButton;