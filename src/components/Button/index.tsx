import { SvgProps } from 'react-native-svg';

import { Container, ButtonInterface } from './styles';

interface ButtonDashboard extends ButtonInterface {
  Icon: React.FC<SvgProps>;
}

function Button({ buttonColor, active, Icon }: ButtonDashboard) {
  return (
    <Container buttonColor={buttonColor} active={active}>
      <Icon />
    </Container>
  );
}

export default Button;
