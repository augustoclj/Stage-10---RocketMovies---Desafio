import { useState } from 'react';
import { Container, GoBack, MovieDetails, Marks} from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { Textarea } from '../../components/Textarea';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { MovieMark } from '../../components/MovieMark';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function CreateMovie(){

  const [title, setTitle] = useState("");
  const [rating, setRating]= useState("");
  const [description, setDescription] = useState("");

  const [marks, setMarks] = useState([]);
  const [newMark, setNewMark] = useState("");

  const navigate = useNavigate();

  function handleAddMark(){
    setMarks(prevState => [...prevState, newMark])
    setNewMark("");
  }

  function handleRemoveMark(deleted){
    setMarks(prevState => prevState.filter(mark => mark !== deleted));
  }

  async function handleNewMovieNote(){

    if(!title){
      return alert("Digite o titulo do filme.");
    }

    if(!rating){
      return alert("Digite uma nota para o filme.");
    }

    if(marks.length === 0){
      return alert("Adicione ao menos um marcador");
    }

    if(newMark){
      return alert("Você deixou uma marcação sem adicionar! Caso não deseje adicionar, deixe o campo vazio.");
    }

    try{
      await api.post("/movie",{
        title,
        description,
        rating,
        movie_tags: marks
      });
  
      alert("Filme cadastrado com sucesso!");
      navigate("/")
    }catch(error){
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possivel atualizar o perfil");
      }
    }  
  }

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
          onChange={e => setTitle(e.target.value)}
        />

        <Input 
          placeholder="Sua nota ( de 0 a 5 )"
          type="number"
          min="1" 
          max="5"
          onChange={e => setRating(e.target.value)}
        />

        <Textarea 
          placeholder="Observações"
          type="text"
          onChange={e => setDescription(e.target.value)}
        />

        <h3>Marcadores</h3>
        <Marks>
          {
            marks.map((mark, index) => (
              <MovieMark
              key={String(index)}
                value={mark}
                onClick={() => handleRemoveMark(mark)}
              />
            ))
          }

        <MovieMark 
          isNew 
          placeholder="Novo Marcador"
          value={newMark}
          onChange={e => setNewMark(e.target.value)}
          onClick={handleAddMark}
        />

        </Marks>

        <Button title="Excluir filme" deleting/>

        <Button 
          title="Salvar alterações" 
          onClick={handleNewMovieNote}
        />
      </MovieDetails>

    </Container>
  );
}