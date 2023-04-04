import { Container, GoBack, MovieDetails, Marks} from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { Textarea } from '../../components/Textarea';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { MovieMark } from '../../components/MovieMark';
import { Link } from 'react-router-dom';

export function CreateMovie(){
  return(
    <Container>
      <Header/>
      <GoBack>
        <Link to="/">
          <FiArrowLeft/>
          Voltar
        </Link>
      </GoBack>
      <MovieDetails>
        <h2>Novo filme</h2>

        <Input 
          placeholder="Título"
          type="text"
        />

        <Input 
          placeholder="Sua nota ( de 0 a 5 )"
          type="number"
          min="1" 
          max="5"
        />

        <Textarea 
          placeholder="Observações"
          type="text"
        />

        <h3>Marcadores</h3>
        <Marks>
        <MovieMark value="Ficção Científica"/>
        <MovieMark value="Test"/>
        <MovieMark value="Test"/>
        <MovieMark value="Test"/>
        <MovieMark value="Test"/>
        <MovieMark value="Test"/>
        <MovieMark value="Test"/>
        <MovieMark value="Test"/>
        <MovieMark value="Test"/>
        <MovieMark value="Test"/>
        <MovieMark value="Test"/>
        <MovieMark value="Test"/>

        <MovieMark isNew placeholder="Novo marcador"/>

        </Marks>

        <Button title="Excluir filme" deleting/>

        <Button title="Salvar alterações"/>
      </MovieDetails>

    </Container>
  );
}