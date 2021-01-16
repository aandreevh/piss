// import { Server, Socket } from "socket.io";

// export class SocketService {
//  io: Server | undefined;

//  setSocket(io: Server) {
//    this.io = io;
//  }

//  public handleEvents() {
//    if(this.io) {
//      this.io.listen(3000);
//     console.log('dsaads');
//     this.io.on('connection', (socket: Socket ) => {
//       console.log;
//       socket.emit('connection');
//       socket.on('connection', () => {
//         socket.emit('successful_connection', 'qj mi huq');
//         console.log(socket.handshake.headers);
//       })
//     })

//    }
//  }
// }

// export default new SocketService();