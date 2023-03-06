import styled from 'styled-components/native';

export const Container = styled.View`
  width: 145px;
  height: 145px;

  border-radius: 72.5px;

  box-sizing: border-box;
  border: 14px solid ${({ theme }) => theme.COLORS.speed_limit_border};

  background-color: ${({ theme }) => theme.COLORS.speed_limit_background};

  display: flex;

  justify-content: center;
  align-items: center;
`;

export const SpeedLimitText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.numbers_600};
  font-weight: 600;
  font-size: 48px;
  line-height: 57px;

  color: ${({ theme }) => theme.COLORS.speed_limit_text};
`;
