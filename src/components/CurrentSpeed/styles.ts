import styled from 'styled-components/native';

export const Container = styled.View`
  width: 20%;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: space-between;

  padding-left: 10px;

  padding-right: 10px;
`;

export const NumberInfoContainer = styled.View`
  margin-top: 35px;

  display: flex;

  flex-direction: column;

  align-items: center;
`;

export const CurrentSpeedText = styled.Text`
  color: ${({ theme }) => theme.COLORS.text};

  font-family: ${({ theme }) => theme.FONTS.numbers_500};

  font-size: 68px;
  line-height: 81px;
`;

export const GasTextContainer = styled.View`
  margin-top: 15px;

  display: flex;

  flex-direction: column;

  align-items: flex-start;
`;

export const KhhText = styled.Text`
  color: ${({ theme }) => theme.COLORS.text};

  font-family: ${({ theme }) => theme.FONTS.regular};

  font-size: 18px;

  line-height: 22px;

  margin-top: -15px;
`;

export const GasText = styled.Text`
  color: ${({ theme }) => theme.COLORS.text};

  font-family: ${({ theme }) => theme.FONTS.numbers_400};

  font-size: 18px;

  line-height: 21px;

  justify-content: flex-start;
`;

export const HotKeyButton = styled.TouchableOpacity`
  display: flex;

  align-items: center;

  justify-content: center;

  width: 100%;

  margin-bottom: 35px;

  background-color: ${({ theme }) => theme.COLORS.primary_button};

  border-radius: 20px;

  height: 50px;
`;

export const HotKeyButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.numbers_500};

  color: ${({ theme }) => theme.COLORS.button_icon};

  font-size: 18px;

  line-height: 22px;
`;
