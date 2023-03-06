import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;

  justify-content: center;

  align-items: center;

  height: 50%;

  width: 85%;

  justify-content: space-between;

  flex-direction: row;

  padding: 20px;

  background-color: ${({ theme }) => theme.COLORS.background};
`;
