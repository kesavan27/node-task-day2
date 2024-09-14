import roomsRouter from "./routes/rooms.js";
import express from "express";

let server = express();
server.use(express.json());
server.use("/", roomsRouter);
const port = 3000;
server.listen(port, () => {
  console.log("listening on port", port);
});