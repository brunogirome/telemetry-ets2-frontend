import React, {
  createContext,
  useState,
  useMemo,
  useContext,
  useCallback,
  useEffect,
} from 'react';

import io, { Socket } from 'socket.io-client';

import AsyncStorage from '@react-native-async-storage/async-storage';

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
    async ({ socketIp }: changeIpProps) => {
      try {
        await AsyncStorage.setItem('@ETD_socket_ip', socketIp);
      } catch (e) {
        alert(e);
      }

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

  useEffect(() => {
    const getIp = async () => {
      try {
        const storageIp = await AsyncStorage.getItem('@ETD_socket_ip');

        if (storageIp) {
          setIp(storageIp);
        }
      } catch (e) {
        alert(e);
      }
    };

    getIp();
  }, []);

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
