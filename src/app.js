const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');

const port = process.env.PORT || 4000;

const dbConnect = require('./dbConnect');
const initializeSocketIo = require('./socket');

const app = express();

const routes = require('./routes');

// Database connection
dbConnect();

app.use(cors());

// Routes
app.use(routes);

// Server Connection
const server = app.listen(port, () => {
  console.log('Server is listening');
});

const io = socketIo(server);

initializeSocketIo(io);
