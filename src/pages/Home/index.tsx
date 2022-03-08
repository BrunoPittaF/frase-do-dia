import { Container } from "./styles";
import { GoogleLogin } from "react-google-login";
import useGlobal from "../../hooks/useGlobal";

import googleButton from "../../assets/googleButton.png";
import logo from "../../assets/logo.png";

export function Home() {
  const { responseGoogle } = useGlobal();
  return (
    <Container>
      <img src={logo} alt="Friends Comments" />

      <div className="loginGoogle">
        <GoogleLogin
          clientId="823901800676-jipue8ar68cemt8785d6gc02mt8mh9c8.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className="loginGoogle__button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <img src={googleButton} alt="Botao do Google" />
            </button>
          )}
          onSuccess={responseGoogle}
          isSignedIn={true}
        />
        <p className="loginGoogle__text">Clique para acessar</p>
      </div>
    </Container>
  );
}
