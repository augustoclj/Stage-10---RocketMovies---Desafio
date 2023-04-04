import { Container } from './styles';

export function Button({icon: Icon, title , disabled = false, deleting, ...rest}){
  return(

    <Container 
      type="button"
      disabled={disabled}
      deleting={deleting}
    >
    { Icon && <Icon size={20} /> }
    {title}
  </Container>
    );
}