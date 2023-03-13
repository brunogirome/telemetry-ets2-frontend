import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#112351', '#1F2C4E'],
})`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.background};

  width: 100%;
  height: 100%;

  padding: 25px;
  padding-top: 35px;
`;

export const SaveButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 25px;
  height: 55px;
  border-radius: 15px;

  background-color: ${({ theme }) => theme.COLORS.primary_button};

  width: 100%;

  margin-top: auto;

  elevation: 5;
`;

export const SaveButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.button_icon};
  font-size: 22px;
  font-family: ${({ theme }) => theme.FONTS.numbers_500};
`;

export const CommandsList = styled.ScrollView`
  width: 100%;
  height: 100%;

  margin-bottom: 25px;
`;

export const CommandContainer = styled.View`
  display: flex;

  flex-direction: row;

  width: 100%;

  justify-content: flex-end;

  align-items: center;

  margin-top: 15px;
`;

export const CommandLabel = styled.Text`
  padding-right: 10px;

  color: ${({ theme }) => theme.COLORS.speed_limit_background};

  font-family: ${({ theme }) => theme.FONTS.numbers_500};

  font-size: 20px;
`;

export const CommandCard = styled.TouchableOpacity`
  border-radius: 5px;

  display: flex;

  justify-content: center;
  align-items: center;

  height: 50px;
  width: 170px;

  background-color: ${({ theme }) => theme.COLORS.speed_limit_background};

  elevation: 5;
`;

export const CommandKeyDisplay = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.numbers_600};

  color: #070c19;

  font-size: 18px;
`;
