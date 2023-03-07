import { useState, useCallback, useEffect } from 'react';

import { SvgProps } from 'react-native-svg';

import io from 'socket.io-client';

import theme from '../../theme';

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

const socket = io('http://192.168.0.118:3001');

socket.connect();

export default function Dashboard() {
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

  useEffect(() => {}, [socket]);

  const pressButton = useCallback(
    (key: string) => {
      socket.emit('ingame_command', key);
    },
    [socket],
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
          />
          <SpeedLimit speedLimit={speedLimit} />
        </ButtonRow>
      </ButtonRowContainer>
      <CurrentSpeed
        currentSpeed={speed}
        currentGasLiters={10}
        maxGasCapacity={100}
      />
    </Container>
  );
}
