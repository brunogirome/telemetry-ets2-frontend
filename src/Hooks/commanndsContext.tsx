import {
  useState,
  useMemo,
  useContext,
  useEffect,
  useCallback,
  createContext,
  ReactNode,
} from 'react';

import DefaultSettings from '../utils/default_settings';

export enum CommandKey {
  hazard = 0,
  cruiseControl,
  highLight,
  engineBreak,
  differential,
  light,
  parking,
}

interface Props {
  children: ReactNode;
}

interface ChangeKeyProps {
  key: CommandKey;
  inputKey: string;
}

export interface CommandInterface {
  name: string;
  varName: string;
  key: CommandKey;
  color: string;
  inputKey: string;
}

interface CommandsContextData {
  commands: Array<CommandInterface>;
  getHazard: () => CommandInterface;
  getCruiseControl: () => CommandInterface;
  getHighLight: () => CommandInterface;
  getEngineBreak: () => CommandInterface;
  getDifferential: () => CommandInterface;
  getLight: () => CommandInterface;
  getParking: () => CommandInterface;
  changeInput({ key, inputKey }: ChangeKeyProps): void;
}

const commandsContext = createContext<CommandsContextData>(
  {} as CommandsContextData,
);

export function CommandsProvider({ children }: Props) {
  const [commands, setCommands] = useState<CommandInterface[]>([]);

  const getHazard = useCallback(() => commands[CommandKey.hazard], [commands]);

  const getCruiseControl = useCallback(
    () => commands[CommandKey.cruiseControl],
    [commands],
  );

  const getHighLight = useCallback(
    () => commands[CommandKey.highLight],
    [commands],
  );

  const getEngineBreak = useCallback(
    () => commands[CommandKey.engineBreak],
    [commands],
  );

  const getDifferential = useCallback(
    () => commands[CommandKey.differential],
    [commands],
  );

  const getLight = useCallback(() => commands[CommandKey.light], [commands]);

  const getParking = useCallback(
    () => commands[CommandKey.parking],
    [commands],
  );

  const changeInput = useCallback(
    ({ key, inputKey }: ChangeKeyProps) => {
      const changedCommand = commands[key];

      changedCommand.inputKey = inputKey;

      const newCommands = commands.map(command =>
        command.key !== key ? command : changedCommand,
      );

      setCommands([...newCommands]);
    },

    [commands, setCommands],
  );

  useEffect(() => {
    const DefaultCommandsArray = [
      DefaultSettings.hazard,
      DefaultSettings.cruiseControl,
      DefaultSettings.highLight,
      DefaultSettings.engineBreak,
      DefaultSettings.differential,
      DefaultSettings.light,
      DefaultSettings.parking,
    ];

    setCommands(DefaultCommandsArray);
  }, []);

  const provider = useMemo<CommandsContextData>(
    () => ({
      commands,
      changeInput,
      getHazard,
      getCruiseControl,
      getHighLight,
      getEngineBreak,
      getDifferential,
      getLight,
      getParking,
    }),
    [commands],
  );

  return (
    <commandsContext.Provider value={provider}>
      {children}
    </commandsContext.Provider>
  );
}

export function useCommands(): CommandsContextData {
  const context = useContext(commandsContext);

  return context;
}
