import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  .name {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;

    color: var(--text-blue);
    font-weight: 600;
    font-size: 1rem;

  }

  .status {
    width: 100%;
    max-width: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 20px;

    color: var(--text-blue);
    font-size: 0.9rem;
    font-weight: 300;
  }

  span {
    border: 5px solid #6BDDDD;
    border-radius: 200px;
  }
`

export const Icon = styled.div`
  width: 70px;
  height: 71px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #D0DAED;
  border-radius: 200px;

  img {
    animation-name: flip;
    animation-duration: 1.2s;
  }


  @keyframes flip {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(359deg);
    }

    75% {
      transform: translateY(-5px);
    }

    100% {
      transform: translateY(0px);
    }
  }

`
