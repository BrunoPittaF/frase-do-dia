import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <h1>Frase do dia</h1>

      <div className="loginGoogle">
        <button type="button">Google</button>
        <p>Clique para acessar</p>
      </div>
    </Container>
  );
}
