import {
  CommandCard,
  Container,
  SaveButton,
  SaveButtonText,
  CommandsList,
  CommandKeyDisplay,
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
        <CategoryTitle>Hotkeys</CategoryTitle>
        {CommandList.map(command => (
          <CommandContainer key={command.key}>
            <CommandLabel>{command.name}</CommandLabel>
            <CommandCard>
              <CommandKeyDisplay>
                {command.input_key == ' ' ? 'SPACE' : command.input_key}
              </CommandKeyDisplay>
            </CommandCard>
          </CommandContainer>
        ))}
        <CategoryTitle>Server</CategoryTitle>
        <InputContainer>
          <CommandLabel>Server IP</CommandLabel>
          <Input />
        </InputContainer>
      </CommandsList>
      <SaveButton>
        <SaveButtonText>Salvar configurações</SaveButtonText>
      </SaveButton>
    </Container>
  );
}
