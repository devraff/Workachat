import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  padding: 5px;


  button {
    width: 100%;
    max-width: 240px;
    height: 50px;

    padding: 5px;


    border-radius: 8px;
    border: none;

    color: white;

    font-size: 23px;
    font-weight: 700;

    background: var(--text-blue);
    cursor: pointer;
    transition: 0.5s;

  }

  button:hover {
    background: var(--background-bot);
    transition: 0.5s;
    color: var(--background-darker-gray);
  }
`