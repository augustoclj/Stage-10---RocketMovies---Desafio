import { Container } from './styles';

export function Button({icon: Icon, title , disabled = false, deleting, ...rest}){
  return(

    <Container 
      type="button"
      disabled={disabled}
      deleting={deleting}
      {...rest}
    >
    { Icon && <Icon size={20} /> }
    {title}
  </Container>
    );
}