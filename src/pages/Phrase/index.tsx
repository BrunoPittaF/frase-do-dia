import { Container } from "./styles";
import fotoperfil from "../../assets/prototipacao/felipe.jpg";

export function Phrase() {
  return (
    <Container>
      <img src={fotoperfil} alt="foto da pessoa" />
      <div className="balloon-phrase">
        <p>Frase aqui</p>
        <span>Autor</span>
      </div>
    </Container>
  );
}
