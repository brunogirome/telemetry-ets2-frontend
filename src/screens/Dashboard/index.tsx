import { useState, useCallback, useEffect } from 'react';
import { NavigationProp, ParamListBase } from '@react-navigation/core';

import * as ScreenOrientation from 'expo-screen-orientation';

import { useIsFocused } from '@react-navigation/native';

import io from 'socket.io-client';

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

import defaultSettings from '../../utils/default_settings';

import { useIp } from '../../Hooks/ipContext';

const socket = io('http://192.168.0.22:3001');

socket.connect();

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

  const { ip, setIp } = useIp();

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
    (key: string) => {
      socket.emit('ingame_command', key);
    },
    [socket, ip, setIp],
  );

  return (
    <Container>
      <ButtonRowContainer>
        <ButtonRow>
          <Button
            key={defaultSettings.hazard.key}
            buttonColor={defaultSettings.hazard.color}
            Icon={HazardIcon}
            active={hazardStatus}
            onPress={() => pressButton(defaultSettings.hazard.input_key)}
          />
          <Button
            key={defaultSettings.cruiseControl.key}
            buttonColor={defaultSettings.cruiseControl.color}
            Icon={CruiseControlIcon}
            active={cruiseControlStatus}
            onPress={() => pressButton(defaultSettings.cruiseControl.input_key)}
          />
          <Button
            key={defaultSettings.highLight.key}
            buttonColor={defaultSettings.highLight.color}
            Icon={HighLightIcon}
            active={highLightStatus}
            onPress={() => pressButton(defaultSettings.highLight.input_key)}
          />
          <Button
            key={defaultSettings.engineBreak.key}
            buttonColor={defaultSettings.engineBreak.color}
            Icon={EngineBreakIcon}
            active={engineBreakStatus}
            onPress={() => pressButton(defaultSettings.engineBreak.input_key)}
          />
        </ButtonRow>
        <ButtonRow>
          <Button
            key={defaultSettings.differential.key}
            buttonColor={defaultSettings.differential.color}
            Icon={DifferentialIcon}
            active={differentialStatus}
            onPress={() => pressButton(defaultSettings.differential.input_key)}
          />
          <Button
            key={defaultSettings.light.key}
            buttonColor={defaultSettings.light.color}
            Icon={LightIcon}
            active={lightStatus}
            onPress={() => pressButton(defaultSettings.light.input_key)}
          />
          <Button
            key={defaultSettings.parking.key}
            buttonColor={defaultSettings.parking.color}
            Icon={ParkingIcon}
            active={parkingStatus}
            onPress={() => pressButton(defaultSettings.parking.input_key)}
          />
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
