import { Container, Icon, Button } from './styles';

interface ButtonDashboard extends Button {
  icon: string;
}

function Button({ buttonColor, active, icon }: ButtonDashboard) {
  return (
    <Container buttonColor={buttonColor}>
      <Icon icon={icon} />
    </Container>
  );
}

export default Button;
