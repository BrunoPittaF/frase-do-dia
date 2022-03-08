import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  gap: 12rem;

  background: var(--black);
  align-items: center;

  h1 {
    color: var(--text-title);
  }

  .loginGoogle {
    display: flex;
    flex-direction: column;

    animation: pulse 0.7s infinite;
    animation-direction: alternate;
    -webkit-animation-name: pulse;
    animation-name: pulse;

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.1);
      }
    }
    &__button {
      background: unset;
      border: none;
    }
    &__text {
      text-align: center;
      color: var(--text-body);
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
    }
  }
`;
