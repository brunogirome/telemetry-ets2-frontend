import {
  CommandCard,
  Container,
  SaveButton,
  SaveButtonText,
  CommandsList,
  CommandLabel,
} from './stlyes';

export default function Settings() {
  return (
    <Container>
      <CommandsList>
        <CommandCard>
          <CommandLabel>Hazard:</CommandLabel>
        </CommandCard>
      </CommandsList>
      <SaveButton>
        <SaveButtonText>Salvar configurações</SaveButtonText>
      </SaveButton>
    </Container>
  );
}
