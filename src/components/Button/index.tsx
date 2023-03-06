import { SvgProps } from 'react-native-svg';

import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonInterface } from './styles';

interface ButtonDashboard extends ButtonInterface, TouchableOpacityProps {
  Icon: React.FC<SvgProps>;
}

function Button({ buttonColor, active, Icon, ...rest }: ButtonDashboard) {
  return (
    <Container buttonColor={buttonColor} active={active} {...rest}>
      <Icon />
    </Container>
  );
}

export default Button;
