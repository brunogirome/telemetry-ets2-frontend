import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;

  flex-direction: row;

  background-color: ${({ theme }) => theme.COLORS.background};
`;

export const ButtonRowContainer = styled.View`
  width: 80%;

  display: flex;

  flex-direction: column;
`;

export const ButtonRow = styled.View`
  padding: 20px;

  display: flex;

  flex-direction: row;

  align-items: center;

  justify-content: space-around;

  height: 50%;

  width: 100%;
`;
