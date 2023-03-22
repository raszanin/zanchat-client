import { useCallback } from 'react';
import { Container, Content } from './styles';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/AuthContext';

interface SignInFormData {
  email: string;
  password: string;
}

export function SignIn() {
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string().required().email('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Content>
        <header>
          <h1>zanChat 1.0</h1>
          <p>area.tec.br</p>
        </header>

        <Form onSubmit={handleSubmit}>
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
        </Form>

        <Link to='/signup'>
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
    </Container>
  );
}
