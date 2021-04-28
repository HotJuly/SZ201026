const express = require('express');
const {resolve} = require('path');

const app = express();

app.use(
    express.static(
        resolve(__dirname,"./build"),
        {maxAge:3600000}
        )
);

app.listen(3003,function(error){
    if(error) return; 
})