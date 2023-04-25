const socket = io("http://localhost:8292/", {transports : ["websocket"]})

socket.on("initial_votes",(data)=>{
    document.getElementById("a").innerText = data.a

    document.getElementById("b").innerText = data.b

    document.getElementById("c").innerText = data.c
})




socket.on("count",(data)=>{
    document.getElementById("a").innerText = data.a

    document.getElementById("b").innerText = data.b

    document.getElementById("c").innerText = data.c
})




socket.on("error",(message)=>{
    document.getElementById("msg").innerText = message
})

socket.on("success",(message)=>{
    document.getElementById("msg").innerText = message
})





document.getElementById("voter_id_form").addEventListener("submit",(e)=>{
    e.preventDefault()
    const voterID = document.getElementById("voterID").value;
    const party = document.getElementById('party').value;
    socket.emit('vote', { voterID, party });
});