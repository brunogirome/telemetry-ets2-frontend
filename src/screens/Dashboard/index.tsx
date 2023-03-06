import { Container } from './styles';

// import { io } from 'socket.io-client';

import HazardIcon from '../../assets/hazard.svg';
import CruizeControlIcon from '../../assets/cruize_control.svg';
import HighLightIcon from '../../assets/high_light.svg';
import EngineBreakIcon from '../../assets/engine_break.svg';
import DifferentialIcon from '../../assets/differential.svg';
import LightIcon from '../../assets/light.svg';
import RetarderIcon from '../../assets/retarder.svg';

import Button from '../../components/Button';

import theme from '../../theme';

export default function Dashboard() {
  // const socket = io('http://192.168.0.118:3001');

  return (
    <Container>
      <Button
        buttonColor={theme.COLORS.hazard}
        active={true}
        Icon={HazardIcon}
      />
      <Button
        buttonColor={theme.COLORS.cruize_control}
        active={true}
        Icon={CruizeControlIcon}
      />
      <Button
        buttonColor={theme.COLORS.high_light}
        active={true}
        Icon={HighLightIcon}
      />
      <Button
        buttonColor={theme.COLORS.engine_break}
        active={true}
        Icon={EngineBreakIcon}
      />
    </Container>
  );
}
