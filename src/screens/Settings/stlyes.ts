import styled from 'styled-components/native';

export const Container = styled.View`
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

export const CommandCard = styled.View`
  margin-top: 15px;

  border-radius: 5px;

  display: flex;

  flex-direction: row;

  height: 70px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.speed_limit_background};

  elevation: 5;

  padding: 15px;
`;

export const CommandLabel = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.numbers_600};

  color: ${({ theme }) => theme.COLORS.text};

  font-size: 18px;
`;
