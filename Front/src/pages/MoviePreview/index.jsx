import { Container, GoBack, MovieDetails, PostInformation, Genres} from './styles';
import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { Rating } from '../../components/Rating';
import { Tag } from '../../components/Tag';
import { Link } from 'react-router-dom';
export function MoviePreview(){
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
        <h2>Intereslellar</h2>
        <Rating data={3}/>
        <PostInformation>
          <img src="https://github.com/augustoclj.png" alt="Foto do usuário" />
          <span> Por Augusto Julietti</span>
          <FiClock/>
          <span> 25/01/2023 às 14:17</span>
        </PostInformation>
        <Genres>
          <Tag title="Ficção Científica"/>
          <Tag title="Drama"/>
          <Tag title="Família"/>
        </Genres>
        <p>

        Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas
         recebe a missão de verificar possíveis planetas para receberem a população mundial, 
         possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para 
         liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de
          Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca 
          de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) 
          investirá numa própria jornada para também tentar salvar a população do planeta.

        </p>

      </MovieDetails>

    </Container>
  );
}