import { Container, Content, Header, Form } from './styles';

export function Login() {
  return (
    <Container>
      <Content>
        <Header>
          <h1>zanChat 1.0</h1>
          <p>area.tec.br</p>
        </Header>
        <Form>
          <form>
            <input type='text' placeholder='Digite seu melhor email' />
            <input type='password' placeholder='Senha' />
          </form>
          <button type='button'>Entrar</button>
          <a href=''>Esqueceu sua senha?</a>
          <a href=''>Novo por aqui?</a>
        </Form>
      </Content>
    </Container>
  );
}
