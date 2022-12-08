const io = require("socket.io")(1900, {
    cors: {
        origin: 'http://localhost:3000'
    },
});
let users = [];
const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) && users.push({ userId, socketId });
}
const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId)
    console.log("socketId : ",socketId)
}
const getUser = (userId) => {
    return users.find((user) => user.userId === userId)
}

io.on("connection", (socket) => {
    //when connect
    console.log("a user connected")
    //take userId and socketId from user
    socket.on("addUser", (userId) => {
        addUser(userId, socket.id)
        io.emit("getUsers", users)
    });
    //send and get messages
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        console.log("receiverId : ",receiverId)
        const user = getUser(senderId);
        console.log("user : ",user)
        io.to(user.socketId).emit("getMassage", {
            senderId,
            text,
        })
    });

    // when disconnect
    socket.on("disconnect", () => {
        console.log("one user disconnected!")
        removeUser(socket.id);
        io.emit("getUsers", users)

    });

})


















