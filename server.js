var express = require('express'),
    app = new express();


app.use(express.static('public'));
app.listen(9009, () => {
    console.log("running 9009");
})
