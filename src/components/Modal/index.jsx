import React from 'react'
import { StyledModal, Container, ContainerFaCloud, ContainerFaCloudTwo, ContainerFaCloudFour, ContainerFaCloudThree } from './styles'

import { FaRocket } from 'react-icons/fa'

import { BsFillCloudFill } from 'react-icons/bs'
import ButtonClose from './ButtonExit'

function Modal({ setModalVisible }) {

  return (
    <Container>
      <StyledModal>
        <p>
          Obrigado pelo seu tempo <br />
          Usaremos seus dados com sabedoria! 🧙‍♂️
        </p>
        <div className="loader">
          <div className="rocket">
            <svg width="0" height="0">
              <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="91%">
                <stop stopColor="#F69050" offset="0%" />
                <stop stopColor="#EE539D" offset="100%" />
              </linearGradient>
            </svg>
            <i className="fa-rocket">
              <FaRocket size={70} style={{ fill: "url(#blue-gradient" }} />
            </i>
            <ContainerFaCloud>
              <BsFillCloudFill size={40} />
            </ContainerFaCloud>
            <ContainerFaCloudTwo>
              <BsFillCloudFill size={40} />
            </ContainerFaCloudTwo>
            <ContainerFaCloudThree>
              <BsFillCloudFill size={40} />
            </ContainerFaCloudThree>
            <ContainerFaCloudFour>
              <BsFillCloudFill size={40} />
            </ContainerFaCloudFour>
          </div>
          <span><i></i></span>
        </div>
        <ButtonClose setModalVisible={setModalVisible} >
          <p>Fechar</p>
        </ButtonClose>
      </StyledModal>
    </Container >
  )
}

export default Modal
