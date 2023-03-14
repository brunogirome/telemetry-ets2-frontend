import {
  CommandInput,
  Container,
  SaveButton,
  SaveButtonText,
  CommandsList,
  CommandContainer,
  CommandLabel,
  CategoryTitle,
  Input,
  InputContainer,
} from './stlyes';

import Commands from '../../utils/default_settings';

export default function Settings() {
  const CommandList: Array<typeof Commands.hazard> = [
    Commands.hazard,
    Commands.cruiseControl,
    Commands.highLight,
    Commands.engineBreak,
    Commands.differential,
    Commands.light,
    Commands.parking,
  ];

  return (
    <Container>
      <CommandsList>
        <CategoryTitle>Server</CategoryTitle>
        <InputContainer>
          <CommandLabel>Server IP</CommandLabel>
          <Input placeholder="Enter the server ip..." />
        </InputContainer>
        <CategoryTitle>Hotkey</CategoryTitle>
        {CommandList.map(command => (
          <CommandContainer key={command.key}>
            <CommandLabel>{command.name}</CommandLabel>
            <CommandInput
              value={command.input_key == ' ' ? 'SPACE' : command.input_key}
            />
          </CommandContainer>
        ))}
      </CommandsList>
      <SaveButton>
        <SaveButtonText>Salvar configurações</SaveButtonText>
      </SaveButton>
    </Container>
  );
}
