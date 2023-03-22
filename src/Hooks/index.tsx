import { SocketProvider } from './SocketContext';

import { CommandsProvider } from './CommanndsContext';

interface Props {
  children: React.ReactNode;
}

export function AppProvider({ children }: Props) {
  return (
    <SocketProvider>
      <CommandsProvider>{children}</CommandsProvider>
    </SocketProvider>
  );
}
