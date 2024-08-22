import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js"

//creating an express server and PORT
const app = express();
const PORT = 3000;


//middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({extended: false}));



//routes

app.get("/", (req, res) => {
    res.send("Hello, Sujit here!");
});

app.use("/api/users",userRoute);

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/first-app')
    .then(() => {
        console.log("MongoDB Connected!");
    })
    .catch((err) => console.log("Mongo Error", err));


app.listen(PORT, () => {
    console.log(`server listening at port ${PORT}`);
})

