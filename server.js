const express = require("express")
const app = express()
const {v4: uuidv4} = require('uuid')


app.use(express.json())

const bounties = [
    {firstname: "Cere", lastname: "Junda", living: true, bounty: 0, type:"" , _id: uuidv4()},
    {firstname: "Ahsoka", lastname: "Tano", living: true, bounty: 0, type:"" , _id: uuidv4()},
    {firstname: "Mace", lastname: "Windu", living: true, bounty: 0, type:"" , _id: uuidv4()},
    {firstname: "Greez", lastname: "Dritus", living: false, bounty: 0, type:"" , _id: uuidv4()}
]

//routes
app.get("/bounties", (req, res)=>{
    res.send(bounties)
})

app.post("/bounties", (req, res)=>{
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
})

app.listen(9000, ()=>{
    console.log("Server is running")
})

module.exports = express