import { Container, Icon, ButtonInterface } from './styles';

function Button({ buttonColor, active }: ButtonInterface) {
  return (
    <Container buttonColor={buttonColor}>
      <Icon />
    </Container>
  );
}

export default Button;
