const express = require("express")
const http = require("http")
const {Server} = require("socket.io")
const app  = express()

const server = http.createServer(app)
const io = new Server(server)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})


let aparty = 0; let bparty =0; let cparty = 0



io.on("connection",(socket)=>{
    socket.emit("initial_votes",{a:aparty,b:bparty,c:cparty})

    socket.on("vote",(data)=>{
        console.log(data)
        if(data.voterID===socket.id){
            socket.emit("error",`You have already Voted `)  
            return
        }

        if(!data.voterID){
            socket.emit("error",`Please enter valid voterID!`)
            return
        }

        switch(data.party){
            case "A party":aparty++
                break;
            
            case "B party":bparty++
                break;

            case "C party":cparty++
                break;
            
            default:socket.emit("error","Invalid")
                return
        }

        const totalVotes = aparty + bparty + cparty;

        aparty_per = ((aparty/totalVotes)*100).toFixed(2);
        bparty_per = ((bparty/totalVotes)*100).toFixed(2);
        cparty_per = ((cparty/totalVotes)*100).toFixed(2);

        io.emit('count', { a: aparty_per, b: bparty_per, c: cparty_per });

        socket.id = data.voterID;
        socket.emit('success', 'Your vote has been casted successfully ♥ ♥');

    })
})

server.listen(8292, () => {
    console.log("server listening on port 8292")
})