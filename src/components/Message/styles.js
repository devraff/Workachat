import styled from 'styled-components'


export const BotMessage = styled.div`
  width: 100%;
  max-width: 329px;

  height: 100%;
  max-height: 150px;

  border-radius: 10px 10px 0 10px;
  padding: 10px 15px;

  background: var(--background-bot);

  font-size: 16px;
  line-height: 21px;
`

export const ContainerBot = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: flex-end;

  margin-top: 10px;
  margin-bottom: 10px;

`

export const ContainerUser = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  margin-top: 10px;
  margin-bottom: 10px;

`

export const UserMessage = styled(BotMessage)`
  width: 100%;
  max-width: 428px;
  background-color: var(--background-darker-gray);

  padding: 7px;

  input {
    width: 80%;
    height: 58px;
    
    font-size: 17px;
    color: #ffffff;
    
    border: 1px solid #40414E;
    border-radius: 5px;
    outline: none;
    
    background: var(--background-medium-gray);
    
    margin: 2px;
    padding: 8px;
  }

  input::placeholder {
    color: #7C7C7C;
  }

  .content-state {
    display: flex;
    width: 100%;
  }

  .content-state select {
    
    font-size: 17px;
    color: #2E2F3C;
    
    border: 1px solid #2E2F3C;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    
    margin: 2px;
    padding: 8px;
    
    background: #F6F6F6;

  }

  .content-input {
    display: flex;
    justify-content: space-between;

  }

  p {
    font-size: 12px !important;
    font-weight: 300;
    color: #FF4B4B ;
    padding-left: 5px;

  }

  .content-stars {
    display: flex;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  max-width: 320px;
  height: 62px;

  margin-right: 23px;

  background-color: var(--background-medium-gray);
  border-radius: 10px;

  label{
      padding: 5px;
      cursor: pointer;
    }

    input[type = "radio"] {
        display: none;
    }

`