import styled from 'styled-components/native';

export interface ButtonInterface {
  buttonColor: string;
  active: boolean;
}

interface SvgInterFace {
  icon: string;
}

export const Container = styled.TouchableOpacity<ButtonInterface>`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 145px;
  height: 145px;

  border-radius: 20px;

  background-color: ${({ theme, active, buttonColor }) =>
    !active ? theme.COLORS.disabled_button : buttonColor};
`;
