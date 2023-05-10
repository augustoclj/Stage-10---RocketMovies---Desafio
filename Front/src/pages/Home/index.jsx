import { useAuth } from '../../hooks/auth';
import {Container, PageTitle, NewMovie, MyMoviesList } from "./styles.js";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Movie } from "../../components/Movie/";
import { Input } from "../../components/Input";
import { FiPlus } from 'react-icons/fi';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';



export function Home(){

  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handlePreview(id){
    navigate(`/preview/${id}`);
  }

  useEffect(() => {
    async function fetchMovies(){
      const response = await api.get("/movie?user_id=1&title");
      setMovies(response.data);
    }

    fetchMovies();
  
  },[]);


  // useEffect(() => {
  //   async function fetchMovies() {
  //     const response = await api.get(`/movie?user_id=${user.id}&title=${search}`);
  //     //fetchMovies(response.data);
  //   }
  //   fetchMovies();
  // }, [search]);

  return(
    <Container>

    <Header>
      <Input 
        placeholder="Pesquisar pelo título"
      />
      </Header>

      <PageTitle>
          <h2>Meus Filmes</h2>

          <NewMovie to="/create">
            <Button title="Adicionar Filme" icon={FiPlus}/>
          </NewMovie>

      </PageTitle>

      <MyMoviesList>
    
      {
        movies && movies.map(movie => (
          <Movie 
          key={String(movie.id)}
          data={movie}
          onClick={() => handlePreview(movie.id)}
          />
          
        ))
        }

      </MyMoviesList>
      

    </Container>
  );
}