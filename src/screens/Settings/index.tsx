import { useEffect } from 'react';

import * as ScreenOrientation from 'expo-screen-orientation';

import { useIsFocused } from '@react-navigation/native';

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

export default function Settings({ navigation }) {
  const CommandList: Array<typeof Commands.hazard> = [
    Commands.hazard,
    Commands.cruiseControl,
    Commands.highLight,
    Commands.engineBreak,
    Commands.differential,
    Commands.light,
    Commands.parking,
  ];

  const isFocused = useIsFocused();

  useEffect(() => {
    const screenOrientation = async () => {
      const orientation = await ScreenOrientation.getOrientationAsync();

      if (orientation > 2) {
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT,
        );
      }
    };

    screenOrientation();
  }, [isFocused]);

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
        <SaveButtonText onPress={() => navigation.navigate('Dashboard')}>
          Salvar configurações
        </SaveButtonText>
      </SaveButton>
    </Container>
  );
}
