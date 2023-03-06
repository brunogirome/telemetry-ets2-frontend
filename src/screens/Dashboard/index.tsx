import { useState, useCallback, useEffect } from 'react';

import { SvgProps } from 'react-native-svg';

import io from 'socket.io-client';

import theme from '../../theme';

import HazardIcon from '../../assets/hazard.svg';
import CruizeControlIcon from '../../assets/cruize_control.svg';
import HighLightIcon from '../../assets/high_light.svg';
import EngineBreakIcon from '../../assets/engine_break.svg';
import DifferentialIcon from '../../assets/differential.svg';
import LightIcon from '../../assets/light.svg';
import RetarderIcon from '../../assets/retarder.svg';

import Button from '../../components/Button';

import SpeedLimit from '../../components/SpeedLimit';

import CurrentSpeed from '../../components/CurrentSpeed';

import { Container, ButtonRow, ButtonRowContainer } from './styles';

const socket = io('http://192.168.0.118:3001');

socket.connect();

interface TruckButton {
  key: number;
  color: string;
  input_key: string;
  isActive: boolean;
  Icon: React.FC<SvgProps>;
}

interface TelemetryInfo {
  truckSpeed: number;
  currentFuel: number;
  totalFuel: number;

  hazardLight: boolean;
  cruizeControl: boolean;
  highLight: boolean;
  engineBreak: boolean;

  differential: boolean;
  light: boolean;
  retarderStatus: number;

  currentMaxSpeed: number;
}

export default function Dashboard() {
  const [hazard, setHazard] = useState<TruckButton>({
    key: 1,
    color: theme.COLORS.hazard,
    input_key: 'F',
    isActive: false,
    Icon: HazardIcon,
  });

  const [hazardLight, setHazardLight] = useState(false);

  const [cruizeControl, setCruizeControl] = useState<TruckButton>({
    key: 2,
    color: theme.COLORS.cruize_control,
    input_key: 'C',
    isActive: false,
    Icon: CruizeControlIcon,
  });

  const [highLight, setHighlight] = useState<TruckButton>({
    key: 3,
    color: theme.COLORS.high_light,
    input_key: 'H',
    isActive: false,
    Icon: HighLightIcon,
  });

  const [engineBreak, setEngineBreak] = useState<TruckButton>({
    key: 4,
    color: theme.COLORS.engine_break,
    input_key: 'E',
    isActive: false,
    Icon: EngineBreakIcon,
  });

  const [differential, setDifferential] = useState<TruckButton>({
    key: 5,
    color: theme.COLORS.differential,
    input_key: 'D',
    isActive: false,
    Icon: DifferentialIcon,
  });

  const [light, setLight] = useState<TruckButton>({
    key: 6,
    color: theme.COLORS.light,
    input_key: 'L',
    isActive: false,
    Icon: LightIcon,
  });

  const [retarder, setRetarder] = useState<TruckButton>({
    key: 7,
    color: theme.COLORS.retarder,
    input_key: 'R',
    isActive: false,
    Icon: RetarderIcon,
  });

  const [speed, setSpeed] = useState(0);

  const [speedLimit, setLimitSpeed] = useState(0);

  useEffect(() => {
    socket.on('speed', (truckSpeed: number) => setSpeed(truckSpeed));

    socket.on('speed_limit', (roadLimitSpeed: number) =>
      setLimitSpeed(roadLimitSpeed),
    );

    socket.on('hazard_light', (hazardLightStatus: boolean) =>
      setHazardLight(hazardLightStatus),
    );
  }, [socket]);

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
            key={hazard.key}
            buttonColor={hazard.color}
            Icon={hazard.Icon}
            active={hazardLight}
            onPress={() => pressButton('F')}
          />
          <Button
            key={cruizeControl.key}
            buttonColor={cruizeControl.color}
            Icon={cruizeControl.Icon}
            active={cruizeControl.isActive}
          />
          <Button
            key={highLight.key}
            buttonColor={highLight.color}
            Icon={highLight.Icon}
            active={highLight.isActive}
            onPress={() => pressButton('K')}
          />
          <Button
            key={engineBreak.key}
            buttonColor={engineBreak.color}
            Icon={engineBreak.Icon}
            active={engineBreak.isActive}
          />
        </ButtonRow>
        <ButtonRow>
          <Button
            key={differential.key}
            buttonColor={differential.color}
            Icon={differential.Icon}
            active={differential.isActive}
            onPress={() => pressButton('V')}
          />
          <Button
            key={light.key}
            buttonColor={light.color}
            Icon={light.Icon}
            active={light.isActive}
            onPress={() => pressButton('L')}
          />
          <Button
            key={retarder.key}
            buttonColor={retarder.color}
            Icon={retarder.Icon}
            active={retarder.isActive}
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
