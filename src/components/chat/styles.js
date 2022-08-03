import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  width: 100%;
  max-width: 428px;

  border-radius: 15px;
  height: 900px;
  overflow-y: scroll;
  background-color: var(--background-darker-gray);

  padding: 7px;


  ::-webkit-scrollbar-track {
    background-color: var(--background-bot);
}
  ::-webkit-scrollbar {
      width: 6px;
      background: #2E2F3B;
  }
  ::-webkit-scrollbar-thumb {
      background: #2E2F3B;
  }
`
