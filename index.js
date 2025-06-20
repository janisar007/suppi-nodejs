
//## Server => initail code => hamesha run krta hai => run = server up
// Server => express (extarnal module);

import express from "express"; //eternal module
const app = express(); // express gives some functionality(listen)


const port = 8000; //server sun raha hai is port per. 
//agar client(frontend) is port per kuch bhi bolega. to uski request serve ki jaegi is server se.

app.listen(port, () => { console.log("Server is running onn port 8000...")});