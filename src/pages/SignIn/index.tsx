import { Container, Content } from './styles';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';

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

          <Input
            type='email'
            name='email'
            id='email'
            placeholder='Digite seu melhor e-mail'
            icon={FiMail}
          />

          <Input
            type='password'
            name='password'
            id='password'
            placeholder='Digite sua senha'
            icon={FiLock}
          />

          <Button type='submit'>Entrar</Button>

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
