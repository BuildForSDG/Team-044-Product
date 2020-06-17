const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const socketIo = require('socket.io');

const port = process.env.PORT || 4000;

// const dbConnect = require('./dbConnect');
const initializeSocketIo = require('./socket');
const app = express();

const productRoutes = require('./routes/productRoute');
const userRoutes = require('./routes/user');
const handleRoutes = require('./routes/handleUser')
// Database connection
// dbConnect();

app.use(cors());
app.use(bodyParser.json());
// Routes
app.use(productRoutes);
app.use(handleRoutes)
app.use('/auth', userRoutes);

// Server Connection
const server = app.listen(port, () => {
  console.log('Server is listening');
});

const io = socketIo(server);

initializeSocketIo(io);
