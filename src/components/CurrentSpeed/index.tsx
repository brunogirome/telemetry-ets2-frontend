import {
  Container,
  CurrentSpeedText,
  GasText,
  KhhText,
  NumberInfoContainer,
  GasTextContainer,
  HotKeyButton,
  HotKeyButtonText,
} from './styles';

interface CurrentSpeedInterface {
  currentSpeed: number;
  currentGasLiters: number;
  maxGasCapacity: number;
  isCruiseControlActive: boolean;
}

function CurrentSpeed({
  currentGasLiters,
  maxGasCapacity,
  currentSpeed,
  isCruiseControlActive,
}: CurrentSpeedInterface) {
  return (
    <Container>
      <NumberInfoContainer>
        <CurrentSpeedText isCruiseControlActive={isCruiseControlActive}>
          {currentSpeed}
        </CurrentSpeedText>
        <KhhText>km/h</KhhText>
        <GasTextContainer>
          <GasText>Tanque:</GasText>
          <GasText>
            {currentGasLiters} L de {maxGasCapacity} L
          </GasText>
        </GasTextContainer>
      </NumberInfoContainer>
      <HotKeyButton onPress={() => {}}>
        <HotKeyButtonText>Configs.</HotKeyButtonText>
      </HotKeyButton>
    </Container>
  );
}

export default CurrentSpeed;
