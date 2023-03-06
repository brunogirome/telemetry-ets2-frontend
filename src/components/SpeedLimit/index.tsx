import { Container, SpeedLimitText } from './styles';

interface SpeedLimitInterface {
  speedLimit: number;
}

function SpeedLimit({ speedLimit }: SpeedLimitInterface) {
  return (
    <Container>
      <SpeedLimitText>{speedLimit}</SpeedLimitText>
    </Container>
  );
}

export default SpeedLimit;
