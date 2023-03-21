import { useEffect, useState, useCallback } from 'react';

import * as ScreenOrientation from 'expo-screen-orientation';

import { useIsFocused } from '@react-navigation/native';

import { useSocket } from '../../Hooks/SocketContext';

import { useCommands, CommandKey } from '../../Hooks/CommanndsContext';

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

export default function Settings({ navigation }) {
  const isFocused = useIsFocused();

  const { ip, setIp } = useSocket();

  const { commands, changeInput } = useCommands();

  const [hazardInputValue, setHazardInputValue] = useState(
    commands[CommandKey.hazard].inputKey,
  );

  const [cruiseControlInputValue, setCruiseControlInputValue] = useState(
    commands[CommandKey.cruiseControl].inputKey,
  );

  const [highLightInputValue, setHighLightInputValue] = useState(
    commands[CommandKey.highLight].inputKey,
  );

  const [engineBreakInputValue, setEngineBreakInputValue] = useState(
    commands[CommandKey.engineBreak].inputKey,
  );

  const [differentialInputValue, setDifferentialInputValue] = useState(
    commands[CommandKey.differential].inputKey,
  );

  const [lightInputValue, setLightInputValue] = useState(
    commands[CommandKey.light].inputKey,
  );

  const [parkingInputValue, setParkingInputValue] = useState(
    commands[CommandKey.parking].inputKey,
  );

  const [ipInputValue, setIpInputValue] = useState(ip);

  const saveSettings = useCallback(() => {
    changeInput({ key: CommandKey.hazard, inputKey: hazardInputValue });
    changeInput({
      key: CommandKey.cruiseControl,
      inputKey: cruiseControlInputValue,
    });
    changeInput({ key: CommandKey.highLight, inputKey: highLightInputValue });
    changeInput({
      key: CommandKey.engineBreak,
      inputKey: engineBreakInputValue,
    });
    changeInput({
      key: CommandKey.differential,
      inputKey: differentialInputValue,
    });
    changeInput({ key: CommandKey.light, inputKey: lightInputValue });
    changeInput({ key: CommandKey.parking, inputKey: parkingInputValue });
    setIp(ipInputValue);
  }, [
    hazardInputValue,
    setHazardInputValue,
    cruiseControlInputValue,
    setCruiseControlInputValue,
    highLightInputValue,
    setHighLightInputValue,
    engineBreakInputValue,
    setEngineBreakInputValue,
    differentialInputValue,
    setDifferentialInputValue,
    lightInputValue,
    setLightInputValue,
    parkingInputValue,
    setParkingInputValue,
    ipInputValue,
    setIpInputValue,
  ]);

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
          <Input
            placeholder="Enter the server ip..."
            value={ipInputValue}
            onChangeText={setIpInputValue}
          />
        </InputContainer>
        <CategoryTitle>Hotkey</CategoryTitle>
        {commands.map(command => (
          <CommandContainer key={command.key}>
            <CommandLabel>{command.name}</CommandLabel>
            <CommandInput
              value={
                eval(`${command.varName}InputValue`) !== ' '
                  ? eval(`${command.varName}InputValue`)
                  : 'SPACE'
              }
              onChangeText={eval(
                `set${
                  command.varName.charAt(0).toUpperCase() +
                  command.varName.slice(1)
                }InputValue`,
              )}
            />
          </CommandContainer>
        ))}
      </CommandsList>
      <SaveButton>
        <SaveButtonText
          onPress={() => {
            saveSettings();

            navigation.navigate('Dashboard');
          }}
        >
          Salvar configurações
        </SaveButtonText>
      </SaveButton>
    </Container>
  );
}
