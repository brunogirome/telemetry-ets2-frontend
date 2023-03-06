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
}

function CurrentSpeed({
  currentGasLiters,
  maxGasCapacity,
  currentSpeed,
}: CurrentSpeedInterface) {
  return (
    <Container>
      <NumberInfoContainer>
        <CurrentSpeedText>{currentSpeed}</CurrentSpeedText>
        <KhhText>km/h</KhhText>
        <GasTextContainer>
          <GasText>Tanque:</GasText>
          <GasText>
            {currentGasLiters} L de {maxGasCapacity} L
          </GasText>
        </GasTextContainer>
      </NumberInfoContainer>
      <HotKeyButton onPress={() => {}}>
        <HotKeyButtonText>Atalhos</HotKeyButtonText>
      </HotKeyButton>
    </Container>
  );
}

export default CurrentSpeed;
