const express=require('express');
const connectDB = require('./connect/db');
const server = express();
const router = require('./router/auth-router');
const PORT = 5000;
const cors = require("cors");

server.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));
server.use(express.json());
connectDB();
server.use('/api/auth',router);

server.listen(PORT,()=>{
    console.log(`Server Started On Port ${PORT}`);
});

