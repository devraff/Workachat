import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  padding: 20px;
  
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.8); 
  
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledModal = styled.div`
  width: 100%;
  max-width: 320px;
  height: 535px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 8px;
  
  box-sizing: border-box;
  background: var(--background-darker-gray);
  
  img {
    width: 100%;
    max-width: 150px;
    padding: 45px;
  }

  p {
    width: 100%;
    max-width: 350px;
    padding: 0 0px 25px;

    font-size: 18px;
    line-height: 25px;

    color: var(--background-bot);

    text-align: center;
  }

  .loader{
    position: relative;
    display: flex;
}

.loader span{
    position: relative;
    width: 200px;
    height: 200px;
    background: #000; 
    border-radius: 50%; 
}

.loader span::before{
    content: '';
    position: absolute;
    
    border-radius: 50%;
    
}
.loader span::after{
    content: '';
    position: absolute;
    
    border-radius: 50%;
    
}
.loader span i{
    position: absolute;
    inset: 0;
    
    filter: blur(5px);
    
    animation: animate 1s linear infinite;
}
@keyframes animate {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.rocket{
    position: absolute;
    inset: 40px;
    z-index: 10;
    display: flex;

    left: 0;
    top: 0;

    border-radius: 200px;
    
    width: 100%;
    height: 100%;
    
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.rocket .fa-rocket {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    fill: linear-gradient(91.1deg, #EE539D 0%, #F69050 100%);
    background-clip: text;
    font-size: 3.5em;
    -webkit-background-clip: text;
    -webkit-text-stroke: 2px #000;
    -webkit-text-fill-color: transparent;
    animation: animateRocket 0.2s linear infinite;
}

@keyframes animateRocket {
    0%,100%{
        transform: translate(0,0) rotate(-45deg);
    }
    50%{
        transform: translate(0,3px) rotate(-45deg);
    }
}

`

export const ContainerFaCloud = styled.i`
    position: absolute;
    top: calc(35px * 0);
    left: calc(45px * 0);
    font-size: 1em;
    color: white;
    opacity: 100%;
    -webkit-text-stroke: 1px #000;
    animation: animateClouds 1s linear infinite;
    animation-delay: calc(-0.5s * 0);


    @keyframes animateClouds {
    0%{
        transform: translateY(calc(-35*5px));
    }
    100%{
        transform: translateY(calc(35*5px));
    }
}
`
export const ContainerFaCloudTwo = styled(ContainerFaCloud)`
    top: calc(35px * 1);
    left: calc(45px * 1);
    animation-delay: calc(-0.5s * 1);
`

export const ContainerFaCloudThree = styled(ContainerFaCloud)`
    top: calc(35px * 2);
    left: calc(45px * 2);
    animation-delay: calc(-0.5s * 2);
`

export const ContainerFaCloudFour = styled(ContainerFaCloud)`
    top: calc(35px * 3);
    left: calc(45px * 3);
    animation-delay: calc(-0.5s * 3);
`

export const Button = styled.button`
  width: 100%;
  max-width: 200px;

  height: 50px;

  padding: 5px;
  margin-top: 30px;

  border: none ;
  border-radius: 8px;

  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  
  background: var(--background-bot);
  transition: 0.5s;
  
  &:hover {
    background: var(--background-medium-gray);
    transition: 0.5s;
    color: #ffffff;
  }
`
