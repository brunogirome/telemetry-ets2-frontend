import { IpProvider } from './ipContext';

import { CommandsProvider } from './commanndsContext';

interface Props {
  children: React.ReactNode;
}

export function AppProvider({ children }: Props) {
  return (
    <IpProvider>
      <CommandsProvider>{children}</CommandsProvider>
    </IpProvider>
  );
}
