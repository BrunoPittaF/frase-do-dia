import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  background: var(--black);
  align-items: center;

  h1 {
    color: var(--text-title);
  }

  .loginGoogle {
    p {
      text-align: center;
      color: var(--text-body);
    }
  }
`;
