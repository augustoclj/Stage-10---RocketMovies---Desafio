import { Container, Profile } from './styles';
import { useAuth } from '../../hooks/auth'
import { Input } from '../Input';
import { Button } from '../Button'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api';


export function Header({children}){

  const {signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
      <h1>RocketMovies</h1>
      {children}
      <div>
        <Profile to="/profile">
            <span>{user.name}</span>
            <img src={avatarUrl} alt={user.name} />
        </Profile>
        <Button title="sair" onClick={signOut} />
      </div>
    </Container>
  );
}