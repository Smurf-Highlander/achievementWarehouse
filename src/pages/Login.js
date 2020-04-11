import React from 'react'
import { Container } from '../components/container/index'

import Logo from '../assets/achievements.webp'

const Login = () => (
    <Container>
        <img src={Logo} />
        <form>
            <input type="text" placeholder="Usuário" />
            <button type="submit">Login</button>
        </form>
    </Container>
)

export default Login