import { useAuth } from '../../hooks/AuthContext';
import { Container, Content } from './styles';
import Button from '../../components/Button';

export function Dashboard() {
  const { signOut, user } = useAuth();

  console.log(user);

  return (
    <Container>
      <Content>
        <h1>Dashboard</h1>
        <p>
          Olá <strong>{user.name}</strong>
        </p>
        <Button onClick={signOut}>Sair</Button>
      </Content>
    </Container>
  );
}
