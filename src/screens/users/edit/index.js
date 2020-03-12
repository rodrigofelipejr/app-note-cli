import React, { Fragment } from 'react'
import { Column, Section, Title, Container, Card } from 'rbx'
import HeaderLogged from '../../../components/HeaderLogged'
import UserEditForm from '../../../components/Users/UserEditForm'
import UserEditPasswordForm from '../../../components/Users/UserEditPasswordForm'
import UserDelete from '../../../components/Users/UserDelete'
import '../../../styles/users.scss'

const UserEditScreen = () => (
  <Fragment>
    <HeaderLogged />
    <Section size='medium' className='users'>
      <Container>
        <Column.Group centered className='users-edit'>
          <Column size={4}>
            <Title size={5} className='has-text-grey has-text-left'>
              Informações Pessoais
            </Title>
            <Card>
              <Card.Content>
                <UserEditForm />
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>

        <Column.Group centered className='users-edit'>
          <Column size={4}>
            <Title size={5} className='has-text-grey has-text-left'>
              Password
            </Title>
            <Card>
              <Card.Content>
                <UserEditPasswordForm />
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
        <Column.Group centered>
          <Column size={4} className='has-text-right'>
            <UserDelete />
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </Fragment>
)

export default UserEditScreen