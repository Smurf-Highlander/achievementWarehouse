import React, { Component } from 'react'
import { Container } from '../components/container/index'
import Logo from '../assets/achievements.png'
import { Form } from '../components/form'

export default class Login extends Component {
  state = {
    input: '',
    password: '',
  }

  hanndleGay = e => {
    e.preventDefault()
    alert('Tu é gay!')
  }

  render() {
    return (
      <Container>
        <img style={{ borderRadius: 5 }} src={Logo} alt="Troféu" />

        <Form onSubmit={this.hanndleGay}>
          <input
            type="text"
            placeholder="Usuário"
            value={this.state.input}
            onChange={event => this.setState({ input: event.target.value })}
          />
          <input type="password" placeholder="Senha" />
          <button type="submit">
            <text>Login</text>
          </button>
        </Form>
      </Container>
    )
  }
}
