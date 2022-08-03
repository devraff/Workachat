import { useState } from "react";

import api from '../../services/api'

import BirthField from "../Fields/birth";
import CityField from "../Fields/city";
import EmailField from "../Fields/email";
import NameField from "../Fields/name";
import Rating from "../Fields/rating";

import Modal from "../Modal";
import ButtonToSend from "../SendButton";

export default function Chatnilson() {

  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [birth, setBirth] = useState('')
  const [email, setEmail] = useState('')

  const [modalVisible, setModalVisible] = useState(false)

  const estadoInicial = {
    step: 1,
    name: '',
    rating: 0
  }

  const [user, setUser] = useState(estadoInicial);

  let { step, rating } = user;
  const stars = JSON.stringify(rating)


  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      name,
      city,
      email,
      birth,
      stars
    };

    try {
      await api.post('/users', data)
      setModalVisible(true)
    } catch (err) {
      alert("Erro no cadastro, tente novamente!")
    }
  }

  const handleSubmit = (fields, value) => {
    if (step === 6) return;
    setUser(
      {
        ...user,
        [fields]: value,
        step: step + 1
      }
    )
  }

  return (
    <>
      {modalVisible ? <Modal setModalVisible={setModalVisible} /> : null}

      <NameField
        setName={setName}
        handleNext={handleSubmit}
      />
      {step >= 2 &&
        <CityField
          user={user}
          setCity={setCity}
          handleNext={handleSubmit}
        />}

      {step >= 3 &&
        <BirthField
          setBirth={setBirth}
          handleNext={handleSubmit}
        />}

      {step >= 4 &&
        <EmailField
          setEmail={setEmail}
          handleNext={handleSubmit}
        />}
      {step >= 5 &&
        <Rating
          handleNext={handleSubmit}
        />}
      {step === 6 &&
        <ButtonToSend
          setModalVisible={setModalVisible}
          handleRegister={handleRegister}
        />}
    </>
  )
}