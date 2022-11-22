// const { Socket } = require('socket.io');

const io = require('socket.io')(9000,{
    cors:{
        origin: 'https://localhost:3000'
    }
});

io.on("connected",(socket)=>{
console.log("a user connected");
io.emit("welcome","hello this is socket server");
})


















