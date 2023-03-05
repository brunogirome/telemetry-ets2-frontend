import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: 16px;
  color: #fff;

  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  width: 145px;

  height: 145px;

  background-color: #474747;

  align-items: center;

  justify-content: center;

  border-radius: 10px;
`;

export const Container = styled.View`
  display: flex;

  justify-content: center;

  align-items: center;

  height: 50%;

  width: 85%;

  justify-content: space-between;

  flex-direction: row;

  padding: 20px;
`;
