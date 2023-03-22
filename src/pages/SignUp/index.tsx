import { Container, Content } from './styles';
import { FiLogIn, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import {} from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';

export function SignUp() {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <header>
          <h1>zanChat 1.0</h1>
          <p>area.tec.br</p>
        </header>

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input
            type='name'
            name='name'
            id='name'
            placeholder='Digite seu nome'
            icon={FiUser}
          />

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

          <Button type='submit'>Cadastrar</Button>
        </Form>

        <a href='new'>
          <FiLogIn />
          Logar na minha conta
        </a>
      </Content>
    </Container>
  );
}
