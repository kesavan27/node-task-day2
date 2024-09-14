import roomsRouter from "./routes/rooms.js";
import express from "express";

let server = express();
server.use(express.json());
server.use("/", roomsRouter);
const port = 8000;
server.listen(port, () => {
  console.log("listening on port", port);
});