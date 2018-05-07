import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:8000");

function subscirbeToTimer(cb) {
  socket.on("timer", timerstamp => cb(timerstamp));
  socket.emit("subscribeToTimer", 1000);
}

export { subscirbeToTimer };
