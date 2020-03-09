import React, { Fragment, useState } from 'react'
import { Button, Field, Control, Input, Column, Label, Help } from "rbx"
import { Redirect } from "react-router-dom"
import UserService from '../../../services/users'

const RegisterForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirectToLogin, setRedirectToLogin] = useState(false)
  const [error, setError] = useState(false)

  if (redirectToLogin)
    return <Redirect to={{ pathname: "/login" }} />

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const user = await UserService.register({ name: name, email: email, password: password })
      setRedirectToLogin(true)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <Fragment>
      <Column.Group centered>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Column size={12}>
            <Field>
              <Label size="small">Name:</Label>
              <Control>
                <Input
                  type="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  name="name"
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Email:</Label>
              <Control>
                <Input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  name="email"
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Password:</Label>
              <Control>
                <Input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  name="password"
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Column.Group>
                  <Column>
                    <button onClick={e => setRedirectToLogin(true)}
                      className="button is-white has-text-custom-purple">Login or</button>
                  </Column>
                  <Column>
                    <Button type='submit' color="custom-purple" outlined>Register</Button>
                  </Column>
                </Column.Group>
              </Control>
            </Field>
            {
              error && <Help color="danger">Email or Password invalid</Help>
            }
          </Column>
        </form>
      </Column.Group>
    </Fragment>
  )
}

export default RegisterForm