import { useState } from "react";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { IUser } from "../interfaces";

function useGlobalProvider() {
  const [userLogged, setUserLogged] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({
    email: "",
    imageUrl: "",
    name: "",
    nickname: "",
  });

  const responseGoogle = (
    response: GoogleLoginResponse & GoogleLoginResponseOffline
  ) => {
    setUserLogged(true);
    setUser({
      email: response.profileObj.email,
      imageUrl: response.profileObj.imageUrl,
      name: response.profileObj.name,
      nickname: "",
    });
  };

  return {
    responseGoogle,
    userLogged,
    setUserLogged,
    user,
    setUser,
  };
}

export default useGlobalProvider;
