const express = require('express');
const cors = require('cors');
const app = express();
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000");
    res.header('Access-Control-Allow-Headers', "http://localhost:8000");
    next();
  }
app.use(allowCrossDomain);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const server = app.listen(8000, () => console.log("Listening to port:8000"));

const io = require('socket.io')(server);

var users = [];

io.on("connection", socket => {

    socket.on("new_user_connecting", data => {
        users.push(data);
        socket.broadcast.emit("new_user_announcement",  data + " has joined the chat.");
    })

    socket.on("new_message_from_client", data => {
        console.log(data);
        socket.broadcast.emit("send_message_to_all_other_clients", data);
    });
});