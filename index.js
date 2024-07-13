let fs = require("node:fs");
let fetch = require("fetch");
let url = process.argv[2] || "arcstellar";
let ext = process.argv[3] || "com";

fetch.fetchUrl(`https://${url}.${ext}`,function(error,meta,data){
    var result = data.toString().replaceAll("Shilpi","Archa");
    fs.writeFile(url+".html",result,"utf-8", function(error){
        if(error){
            console.log("Error", error)
        }else{
            console.log(`writing ${url}.${ext} to ${url}.html`);
            
        }
    })
})

