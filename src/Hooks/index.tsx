import { IpProvider } from './ipContext';

interface Props {
  children: React.ReactNode;
}

export function AppProvider({ children }: Props) {
  return <IpProvider>{children}</IpProvider>;
}
