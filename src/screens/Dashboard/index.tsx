import { Container, Text } from './styles';

import { io } from 'socket.io-client';

import Button from '../../components/Button';

export default function Dashboard() {
  const socket = io('http://192.168.0.118:3001');

  return (
    <>
      <Container></Container>
    </>
  );
}
