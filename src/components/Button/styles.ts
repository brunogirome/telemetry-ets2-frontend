import styled from 'styled-components/native';

export interface ButtonInterface {
  buttonColor: string;
  active?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonInterface>`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 145px;
  height: 145px;

  border-radius: 20px;

  background-color: ${({ buttonColor }) => buttonColor};
`;

export const Icon = styled.Image`
  width: 100px;
  height: 100px;
`;
