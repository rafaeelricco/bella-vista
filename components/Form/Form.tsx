import React, { useState, useRef } from 'react'
import { Button, Checkbox, Input, Notification, Textarea } from '@mantine/core'
import { IconCheck } from '@tabler/icons'
import { Send } from 'tabler-icons-react'
import styled from 'styled-components'
import FormData from 'form-data'
import emailjs from '@emailjs/browser'

const InputsContainer = styled.div`
  display: grid;
  grid-gap: 0.518rem;
  margin: 1.618rem 0 1.618rem 0;
`
const Title = styled.h1`
  font-size: 1.618rem;
  color: #305b1e;
  font-weight: 700;
  letter-spacing: -0.8px;
  margin: 0 0 -0.518rem 0;
`
const Subtitle = styled.p`
  font-size: 0.818rem;
  margin: 0 0 0.218rem 0;
  color: #909296;
`
const FormContainer = styled.form`
  display: grid;
  grid-gap: 0.618rem;
`

export function Form() {
  const [sucess, setSucess] = useState(false)
  const form = useRef()
  // const product = product_req
  const [formValue, setFormValue] = React.useState({
    accept_contact: true,
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const formBodyValue = new FormData()

  formBodyValue.append('name', formValue.name)
  formBodyValue.append('email', formValue.email)
  formBodyValue.append('phone', formValue.phone)
  formBodyValue.append('message', formValue.message)

  const sendEmail = () => {
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        form.current,
        `${process.env.NEXT_PUBLIC_USER_ID}`
      )
      .then((res) => {
        if (res.status == 200) {
          setSucess(true)
        } else {
          console.table(res)
        }
      })
  }

  const handleForm = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }

  const send = (e) => {
    e.preventDefault()
    sendEmail()
  }

  console.table(formValue)

  return (
    <>
      <InputsContainer>
        <Title> Fale conosco</Title>
        <Subtitle>
          Para obter mais informações sobre imóveis ou retirar dúvidas, preencha
          o formulário abaixo.
        </Subtitle>
        <FormContainer ref={form} onSubmit={send}>
          <Input
            name={'name'}
            required
            onChange={handleForm}
            variant="default"
            color="yellow"
            radius={'md'}
            placeholder="Nome completo"
          />
          <Input
            name={'email'}
            radius={'md'}
            required
            onChange={handleForm}
            placeholder="E-mail"
          />
          <Input
            name={'phone'}
            radius={'md'}
            required
            onChange={handleForm}
            placeholder="Telefone"
          />
          <Textarea
            name={'message'}
            radius={'md'}
            onChange={handleForm}
            placeholder="Mensagem (opcional)"
          />
          <Checkbox
            required
            size="xs"
            label="Aceito receber contato via telefone ou e-mail."
          />
          <Notification
            hidden={!sucess}
            onClose={() => setSucess(false)}
            icon={<IconCheck size={20} />}
            color="yellow"
            radius="lg"
            title="Mensagem enviada com sucesso!"
          >
            Em breve entraremos em contato com você.
          </Notification>
          <Button
            variant="light"
            color={'yellow'}
            fullWidth
            type="submit"
            leftIcon={<Send width={16} />}
          >
            Enviar
          </Button>
        </FormContainer>
      </InputsContainer>
    </>
  )
}
