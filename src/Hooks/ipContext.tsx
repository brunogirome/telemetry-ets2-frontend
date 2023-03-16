import React, { createContext, useState, useMemo, useContext } from 'react';

interface Props {
  children: React.ReactNode;
}

interface IpContextData {
  ip: string;
  setIp(ip: string): void;
}

const IpContext = createContext<IpContextData>({} as IpContextData);

export function IpProvider({ children }: Props) {
  const [ip, setIp] = useState('');

  const provider = useMemo<IpContextData>(
    () => ({
      ip,
      setIp,
    }),
    [ip],
  );

  return <IpContext.Provider value={provider}>{children}</IpContext.Provider>;
}

export function useIp(): IpContextData {
  const context = useContext(IpContext);

  return context;
}
