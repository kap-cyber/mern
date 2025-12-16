const express=require('express');
const connectDB = require('./connect/db');
const server = express();
const auth_router = require('./router/auth-router');
const contact_router=require("./router/contact-router");
const PORT = process.env.PORT;
const cors = require("cors");

server.use(cors({
  origin: true,
  methods: ["GET", "POST"],
  credentials: true
}));
server.use(express.json());
connectDB();
server.use('/api/auth',auth_router);
server.use('/api',contact_router);

server.listen(PORT,()=>{
    console.log(`Server Started On Port ${PORT}`);
});

