import { Container} from './styles';
import { Rating } from '../../components/Rating'
import { Tag } from '../../components/Tag'

export function Movie({ data, ...rest}){
  return(
    <Container {...rest} >
      
      <h2>{data.title}</h2>
      <Rating data={data.rating}/>
      <p> {data.description} </p>

      {
        data.movie_tags &&
        <footer>
          {
            data.movie_tags.map(tag => <Tag key={tag.name} title={tag.name}/> )
          }
        </footer>
      }
    </Container>
  );
}