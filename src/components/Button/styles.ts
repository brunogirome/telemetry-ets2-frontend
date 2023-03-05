import styled from 'styled-components/native';

export interface Button {
  buttonColor: string;
  active?: boolean;
}

interface Svg {
  icon: string;
}

export const Container = styled.TouchableOpacity<Button>`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 145px;
  height: 145px;

  border-radius: 20px;

  background-color: ${({ buttonColor }) => buttonColor};
`;

export const Icon = styled.Image<Svg>`
  width: 100px;
  height: 100px;

  src: ${({ icon }) => icon};
`;
