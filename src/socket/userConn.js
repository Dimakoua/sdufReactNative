import { Socket } from 'phoenix';
import { SOCKET_URL, SOCKET_PROJECT_TOKEN } from '@env';
import * as rootNavigation from '../navigation/rootNavigation';

let socket = null;

export const initSocketConnection = async () => {
  return new Promise((resolve, reject) => {
    if (socket && socket.isConnected()) {
      resolve(socket);
    }

    socket = new Socket(`${SOCKET_URL}`, {
      params: { token: SOCKET_PROJECT_TOKEN },
      timeout: 45 * 1000,
    });

    socket.connect();
    console.log('Socket connect');

    socket.onOpen(() => {
      console.info('The socket was opened');
      resolve(socket);
    });

    socket.onError((data) => {
      rootNavigation.navigate('YouAreOfflineScreen', {});

      if (data?.message?.includes('403')) {
        console.error('Socket is empty');
        reject(false);
      }

      if (data?.message?.includes('401')) {
        console.error('Log out');
        reject(false);
      }

      reject(false);
    });
  });
};

export const closeConnection = () => {
  if (!socket) return;

  socket.channels.forEach((channel) => channel.leave());

  socket.disconnect();
  socket = null;
  return true;
};

export const getSocket = () => {
  if (socket) return socket;

  console.error('Socket is empty');
  return null;
};
