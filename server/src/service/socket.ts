// import { Server, Socket } from 'socket.io';
// import { User } from '../model/user';

// interface ConnectionData{
//   clientId: string;
// }

// class SocketService {
//   private io: Server;

//   setServerSocketIO(io: Server) {
//     this.io = io;
//   }

//   async updateSchedule(user: User) {
//     const schedule = await getScheduledSongs(user);
//     this.notifyUser(user.id, "update-schedule", schedule);
//   }

//   notifyPlayingSoon(user: User, playingSoon: PlayingSoon){
//     this.notifyUser(user.id, "playing-soon", playingSoon);
//   }

//   private notifyUser(userId: number, event: string, data: any) {
//     this.io.to(userId.toString()).emit(event, data);
//   }

//   handleEvents() {
//     this.io.on('connection', (socket) => {
//       socket.on('register-connection', (connectionData) => this.registerConnection(socket, connectionData));
//     });
//   }

//   private async registerConnection(socket: Socket, { clientId }: ConnectionData) {
//     const spotifyUser = new SpotifyUser(clientId);
//     await spotifyUser.init();
//     const userId = await spotifyUser.retrieveUserId();
//     socket.join(userId.toString());
//   }
// }

// export default new SocketService();