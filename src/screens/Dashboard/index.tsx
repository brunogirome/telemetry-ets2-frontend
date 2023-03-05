import { Container, Button, Text } from './styles';

import { io } from 'socket.io-client';

export default function Dashboard() {
  const socket = io('http://192.168.0.118:3001');

  return (
    <>
      <Container>
        <Button onPress={() => socket.emit('ingame_command', 'F')}>
          <Text>Pisca alerta</Text>
        </Button>
        <Button onPress={() => alert('apertou')}>
          <Text>Controle de bordo</Text>
        </Button>
        <Button onPress={() => socket.emit('ingame_command', 'K')}>
          <Text>Farol alto</Text>
        </Button>
        <Button onPress={() => alert('apertou')}>
          <Text>Freio a motor</Text>
        </Button>
      </Container>
      <Container>
        <Button onPress={() => socket.emit('ingame_command', 'V')}>
          <Text>Diferencial</Text>
        </Button>
        <Button onPress={() => socket.emit('ingame_command', 'L')}>
          <Text>Farol</Text>
        </Button>
        <Button onPress={() => alert('apertou')}>
          <Text>Retardador</Text>
        </Button>
        <Button onPress={() => alert('apertou')}>
          <Text>Velocidade via</Text>
        </Button>
      </Container>
    </>
  );
}
