import { Container, Profile } from './styles';
import { Input } from '../Input';


export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título" />
      <Profile to="/profile">
        <div>
          <span>Augusto Julietti</span>
          <a href="#">sair</a>
        </div>
        <img src="https://github.com/augustoclj.png" alt="Foto do usuário" />
      </Profile>
    </Container>
  );
}