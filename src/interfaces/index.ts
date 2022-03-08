import { Dispatch, SetStateAction } from "react";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

export interface IUser {
  email: string;
  name: string;
  imageUrl: string;
  nickname: string;
}

export interface IContext {
  userLogged: boolean;
  setUserLogged: Dispatch<SetStateAction<boolean>>;
  responseGoogle(
    response: GoogleLoginResponseOffline | GoogleLoginResponse
  ): void;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}
