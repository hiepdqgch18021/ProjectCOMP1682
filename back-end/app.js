
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require("helmet");
const morgan = require('morgan');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path =require('path');

const dotenv = require("dotenv");
require("dotenv").config();
dotenv.config();

//connect database
mongoose.connect(process.env.MONGODB_URL, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log("Successfully connected to the database");
    }).catch((err) => {
      console.log(`Could not connect to the database. Exiting now...\n${err}`);
      process.exit();
    });




//middleware 
app.use(express.json());
app.use(helmet());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(express.json());
app.use(morgan("common"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ~~~~~~~~ API ~~~~~~~~~~~~~~~~
// ----User-------------------------------------------
const authRoute = require("./routes/authRoute")
app.use("/api/auth", authRoute);

const adminRoute = require("./routes/adminRoute")
app.use("/api/admin", adminRoute);

const userRoute = require("./routes/usersRoute")
app.use("/api/user",userRoute)

// -Story------------------------------------------------
const storyRoute =require("./routes/storyRoute");
app.use("/api/story",storyRoute);

const diaryRoute = require("./routes/diaryRoute");
app.use("/api/diary",diaryRoute);

// -messenger------------------------------------------------
const conversationRoute = require("./routes/conversationRoute");
app.use("/api/conversation",conversationRoute);

const messageRoute = require("./routes/messageRoute");
app.use("/api/message",messageRoute);

app.get('/',(req, res) => {
    res.send("welcome Home!");
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to port ${port}`));
