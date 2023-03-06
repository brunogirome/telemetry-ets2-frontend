import { useState, useCallback } from 'react';
import { SvgProps } from 'react-native-svg';

// import { io } from 'socket.io-client';

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

interface TruckButton {
  key: number;
  color: string;
  input_key: string;
  isActive: boolean;
  Icon: React.FC<SvgProps>;
}

export default function Dashboard() {
  // const socket = io('http://192.168.0.118:3001');

  const [hazzard, setHazard] = useState<TruckButton>({
    key: 1,
    color: theme.COLORS.hazard,
    input_key: 'F',
    isActive: false,
    Icon: HazardIcon,
  });

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

  return (
    <Container>
      <ButtonRowContainer>
        <ButtonRow>
          <Button
            key={hazzard.key}
            buttonColor={hazzard.color}
            Icon={hazzard.Icon}
            active={hazzard.isActive}
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
          />
          <Button
            key={light.key}
            buttonColor={light.color}
            Icon={light.Icon}
            active={light.isActive}
          />
        </ButtonRow>
        <ButtonRow>
          <SpeedLimit speedLimit={90} />
        </ButtonRow>
      </ButtonRowContainer>
      <CurrentSpeed
        currentSpeed={54}
        currentGasLiters={10}
        maxGasCapacity={100}
      />
    </Container>
  );
}
