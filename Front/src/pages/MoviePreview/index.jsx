import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { Container, GoBack, MovieDetails, PostInformation, Genres} from './styles';
import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { Rating } from '../../components/Rating';
import { Tag } from '../../components/Tag';
import { Link } from 'react-router-dom';

export function MoviePreview(){
  
  const params = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie(){
      const response = await api.get(`/movie/${params.id}`);
      setMovie(response.data);
    }

    fetchMovie();
  },[]);

  return(
    <Container>
      <Header/>
      <GoBack>
        <Link to="/">
          <FiArrowLeft/>
          Voltar
        </Link>
      </GoBack>
      {
        movie &&
      <MovieDetails>
        <h2> {movie.title} </h2>
        <Rating data={movie.rating}/>
        <PostInformation>
          <img src="https://github.com/augustoclj.png" alt="Foto do usuário" />
          <span> Por Augusto Julietti</span>
          <FiClock/>
          <span> {movie.created_at}</span>
        </PostInformation>
        <Genres>

        {
           movie.movie_tags && movie.movie_tags.map(tag => (
            <Tag
              key={String(tag.id)}
              title={tag.name}
            />
            ))
          }

        </Genres>
        <p>
          {movie.description}
        </p>

      </MovieDetails>
      }

    </Container>
  );
}