import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #d3d3d3;

  @media(max-width: 400px) {
    padding: 10px;
  }
`