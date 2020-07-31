const express = require("express")
const app = express()
// req laf bien luu thong tin ma client gui len
// res laf luwu thong tin tu phia server tra ve
    app.get("/", function(req, res){
res.send("hello from server AnAn")
    })
app.listen(3000, function(){
    console.log("hello nodejs running on port 3000 AnAn")
    // dong chu nay se hien ra moi khi client gui yeu 
    // cau toi duong dan /
})

// console.log("hello AnAn")

