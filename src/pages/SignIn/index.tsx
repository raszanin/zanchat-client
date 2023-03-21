import { Container, Content } from './styles';
import { FiLogIn } from 'react-icons/fi';

export function SignIn() {
  return (
    <Container>
      <Content>
        <header>
          <h1>zanChat 1.0</h1>
          <p>area.tec.br</p>
        </header>

        <form>
          <h1>Faça seu logon</h1>

          <input
            type='email'
            name='email'
            id='email'
            placeholder='Digite seu melhor e-mail'
          />

          <input
            type='password'
            name='password'
            id='password'
            placeholder='Digite sua senha'
          />

          <button type='submit'>Entrar</button>

          <a href='forgot'>Esqueci minha senha</a>
        </form>

        <a href='new'>
          <FiLogIn />
          Criar conta
        </a>
      </Content>
    </Container>
  );
}
