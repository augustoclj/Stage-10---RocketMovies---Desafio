import { Container} from './styles';
import { Rating } from '../../components/Rating'
import { Tag } from '../../components/Tag'

import { Link } from 'react-router-dom';

export function Movie({ data, ...rest}){
  return(
    <Container>
      <h2><Link to="/preview"> { data.title } </Link></h2>
      <Rating data={data.rating}/>
      <p> {data.description} </p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.name} title={tag.name}/> )
          }
        </footer>
      }
    </Container>
  );
}