import React, { Fragment, useState } from 'react'
import { Button, Field, Control, Input, Column, Section, Help } from "rbx"
import { Redirect } from "react-router-dom"

const RegisterForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirectToLogin, setRedirectToLogin] = useState(false)
  const [error, setError] = useState(false)

  if (redirectToLogin)
    return <Redirect to={{ pathname: "/login" }} />

  return (
    <Fragment>
      <Column.Group centered>
        <form autoComplete="off">
          <Column size={12}>
            <Field>
              <Control>
                <Input
                  type="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  placeholder="Name"
                  name="name"
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                  name="email"
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                  name="password"
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Column.Group>
                  <Column>
                    <button className="button is-white has-text-custom-purple"
                      onClick={e => setRedirectToLogin(true)}>Login or</button>
                  </Column>
                  <Column>
                    <Button color="custom-purple" outlined>Register</Button>
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