import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useCallback,
} from 'react';

import io, { Socket } from 'socket.io-client';

interface Props {
  children: React.ReactNode;
}

interface changeIpProps {
  socketIp: string;
}

interface SocketContextData {
  ip: string;
  socket: Socket;
  changeIp: ({ socketIp }: changeIpProps) => void;
}

const SokcketContext = createContext<SocketContextData>(
  {} as SocketContextData,
);

export function SocketProvider({ children }: Props) {
  const [ip, setIp] = useState('');

  let socket = io(ip);

  const changeIp = useCallback(
    ({ socketIp }: changeIpProps) => {
      setIp(socketIp);

      socket = io(socketIp);

      socket.connect();
    },
    [ip],
  );

  const provider = useMemo<SocketContextData>(
    () => ({
      ip,
      changeIp,
      socket,
    }),
    [ip],
  );

  return (
    <SokcketContext.Provider value={provider}>
      {children}
    </SokcketContext.Provider>
  );
}

export function useSocket(): SocketContextData {
  const context = useContext(SokcketContext);

  return context;
}
