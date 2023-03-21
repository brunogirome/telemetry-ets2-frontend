import React, { createContext, useState, useMemo, useContext } from 'react';

interface Props {
  children: React.ReactNode;
}

interface SocketContextData {
  ip: string;
  setIp(ip: string): void;
}

const SokcketContext = createContext<SocketContextData>(
  {} as SocketContextData,
);

export function IpProvider({ children }: Props) {
  const [ip, setIp] = useState('');

  const provider = useMemo<SocketContextData>(
    () => ({
      ip,
      setIp,
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
