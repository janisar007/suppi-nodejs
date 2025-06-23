
//## Server => initail code => hamesha run krta hai => run = server up
// Server => express (extarnal module);

import express from "express"; //eternal module
import { connectToDB } from "./db.js";
import User from "./model/userModel.js";
const app = express(); // express gives some functionality(listen)


// MIDDLEWARES
app.use(express.json()); // For JSON body
app.use(express.urlencoded({ extended: true })); 


const port = 8000; //server sun raha hai is port per. 
//agar client(frontend) is port per kuch bhi bolega. to uski request serve ki jaegi is server se.


// node index.js => har baar server restart krna padega => jab bhi koi new changes.
// nodemon 


//1. databse kuch read kr rahe hai aur frontend ko return.
//2. "/" => pehchan hai frontend k liye.
//3. api
app.get("/student", (req, res) => {
    const info = {
        name: "Suppi",
        age: 22,
    }

    //java script => data base le aayehg


    res.status(200).json(info);
})


//post api
app.post("/user", async (req, res) => {
    
//documnet => row => data
//argument => data

    const dataobj = {
        username: 'asma',
        age: 12,
        daddyName: "monish"
    }
    
    
    //data ko databse store karati
    const userData = await User.create(dataobj); //asyncronous => time lagea

    res.status(200).json({status: true, message: "data stored successfully!"})
})

app.get("/getalluser", async (req, res) => {
    const allUserData = await User.find();

    res.status(200).json(allUserData)

})

app.get("/getoneuser", async (req, res) => {
    try {
        const userId = req.query.uid;
        const name = req.query.name;
        const sername = req.query.sername;

        console.log(userId)
        console.log(name)
        console.log(sername)



        const userData = await User.findById(userId);

        res.status(200).json(userData)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error) //frontend => api fail kuch error
    }
})




connectToDB();


app.listen(port, () => { console.log("Server is running on port 8000...")});