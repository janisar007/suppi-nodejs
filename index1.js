//## MODULE


// server banana hai
//1. initial code
//2. sabse pehle sun
//3. run = server up

import { subtract, sum } from "./calculator.js"; //custom module


//MODULE => file / set of file = folder => kuch code => use (work kaise X)
// 3 type ->
//1. in built (nodejs) (fs, os)
//2. external (npm se install (express))
//3. custom (hum log banate)
// Module => import 

// inbuild module.

import fs from "fs"; //inbuilt module => nodejs => file read, file write
import os from "os"; //current os, os related task

console.log(os.platform());


// fs.writeFileSync('note.txt', 'Hello, I am learning Node.js!');


