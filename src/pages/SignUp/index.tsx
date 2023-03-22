import { useCallback } from 'react';
import { Container, Content } from './styles';
import { FiLogIn, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

export function SignUp() {
  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required().email('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/users', data);
    } catch (error) {
      console.log(error);
    }
  }, []);

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

        <Link to='/'>
          <FiLogIn />
          Logar na minha conta
        </Link>
      </Content>
    </Container>
  );
}
