import { useState, useCallback, useEffect } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/core';

import * as ScreenOrientation from 'expo-screen-orientation';

import { useIsFocused } from '@react-navigation/native';

import HazardIcon from '../../assets/hazard.svg';
import CruiseControlIcon from '../../assets/cruize_control.svg';
import HighLightIcon from '../../assets/high_light.svg';
import EngineBreakIcon from '../../assets/engine_break.svg';
import DifferentialIcon from '../../assets/differential.svg';
import LightIcon from '../../assets/light.svg';
import ParkingIcon from '../../assets/parking.svg';

import Button from '../../components/Button';

import SpeedLimit from '../../components/SpeedLimit';

import CurrentSpeed from '../../components/CurrentSpeed';

import { Container, ButtonRow, ButtonRowContainer } from './styles';

import { useCommands, CommandKey } from '../../Hooks/CommanndsContext';

import { useSocket } from '../../Hooks/SocketContext';

interface TelemetryInitialization {
  hazard: boolean;
  cruiseControl: boolean;
  highlight: boolean;
  engineBreak: boolean;
  differential: boolean;
  light: boolean;
  parking: boolean;

  maxSpeed: number;
  currentSpeed: number;

  currentFuel: number;
  fuelCapacity: number;
}

interface DashboardProps {
  navigation: NavigationProp<ParamListBase>;
}

export default function Dashboard({ navigation }: DashboardProps) {
  const [hazardStatus, setHazardStatus] = useState(false);

  const [cruiseControlStatus, setCruiseControlStatus] = useState(false);

  const [highLightStatus, setHighLightStatus] = useState(false);

  const [engineBreakStatus, setEngineBreakStatus] = useState(false);

  const [differentialStatus, setDifferentialStatus] = useState(false);

  const [lightStatus, setLightStatus] = useState(false);

  const [parkingStatus, setParkingStatus] = useState(false);

  const [speed, setSpeed] = useState(0);

  const [speedLimit, setLimitSpeed] = useState(0);

  const [currentGas, setCurrentGas] = useState(0);

  const [fuelCapacity, setFuelCapacity] = useState(0);

  const isFocused = useIsFocused();

  const { commands } = useCommands();

  const { socket } = useSocket();

  const getSvg = (index: number) => {
    switch (index) {
      case 0:
        return HazardIcon;
      case 1:
        return CruiseControlIcon;
      case 2:
        return HighLightIcon;
      case 3:
        return EngineBreakIcon;
      case 4:
        return DifferentialIcon;
      case 5:
        return LightIcon;
      case 6:
        return ParkingIcon;
      default:
        return null;
    }
  };

  useEffect(() => {
    const screenOrientation = async () => {
      const orientation = await ScreenOrientation.getOrientationAsync();

      if (orientation < 3) {
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE,
        );
      }
    };

    screenOrientation();
  }, [isFocused]);

  useEffect(() => {
    socket.on('hazard', status => setHazardStatus(status));

    socket.on('cruise-control', status => setCruiseControlStatus(status));

    socket.on('high-beam', status => setHighLightStatus(status));

    socket.on('engine-break', status => setEngineBreakStatus(status));

    socket.on('differential', status => setDifferentialStatus(status));

    socket.on('low-beam', status => setLightStatus(status));

    socket.on('park', status => setParkingStatus(status));

    socket.on('speed', speed => setSpeed(speed));

    socket.on('speed-limit', speedLimitValue => setLimitSpeed(speedLimitValue));

    socket.on('fuel-value', currentGasValue => setCurrentGas(currentGasValue));

    socket.on('fuel-capacity', fuelCapacityValue =>
      setFuelCapacity(fuelCapacityValue),
    );

    socket.on(
      'telemetry-initialization',
      (telemetryInitialization: TelemetryInitialization) => {
        setHazardStatus(telemetryInitialization.hazard);
        setCruiseControlStatus(telemetryInitialization.cruiseControl);
        setHighLightStatus(telemetryInitialization.highlight);
        setEngineBreakStatus(telemetryInitialization.engineBreak);
        setDifferentialStatus(telemetryInitialization.differential);
        setLightStatus(telemetryInitialization.light);
        setParkingStatus(telemetryInitialization.parking);
        setSpeed(telemetryInitialization.currentSpeed);
        setLimitSpeed(telemetryInitialization.maxSpeed);
        setCurrentGas(telemetryInitialization.currentFuel);
        setFuelCapacity(telemetryInitialization.fuelCapacity);
      },
    );
  }, [socket]);

  const pressButton = useCallback(
    (input: string) => {
      socket.emit('ingame_command', input);
    },
    [socket],
  );

  return (
    <Container>
      <ButtonRowContainer>
        <ButtonRow>
          {commands.map(
            command =>
              command.key <= CommandKey.engineBreak && (
                <Button
                  key={command.key}
                  buttonColor={command.color}
                  Icon={getSvg(command.key)}
                  active={eval(`${command.varName}Status`) as boolean}
                  onPress={() => pressButton(command.inputKey)}
                />
              ),
          )}
        </ButtonRow>
        <ButtonRow>
          {commands.map(
            command =>
              command.key >= CommandKey.differential && (
                <Button
                  key={command.key}
                  buttonColor={command.color}
                  Icon={getSvg(command.key)}
                  active={eval(`${command.varName}Status`) as boolean}
                  onPress={() => pressButton(command.inputKey)}
                />
              ),
          )}
          <SpeedLimit speedLimit={speedLimit} />
        </ButtonRow>
      </ButtonRowContainer>
      <CurrentSpeed
        currentSpeed={speed}
        currentGasLiters={currentGas}
        maxGasCapacity={fuelCapacity}
        isCruiseControlActive={cruiseControlStatus}
        navigation={navigation}
      />
    </Container>
  );
}
