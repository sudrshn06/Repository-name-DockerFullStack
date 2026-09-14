import express from "express";

const port = 3000;
const app = express();


app.get("/" , (req, res)=>{
    res.json("kwelcome to dummy backend");
})

app.listen(port , () =>{
console.log(`Server is running on port ${port}`);
});
