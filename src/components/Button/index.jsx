import React from 'react'

import send from '../../assets/send.png'

import { Button } from './styles';


function BtnForward({ error }) {
  return (
    <Button type="submit" error={error}>
      <img src={send} alt="" />
    </Button>
  )
}

export default BtnForward
