const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;


//serving public file
app.use(express.static((__dirname, 'files')));



app.get('/', (req, res) => {
    res.sendFile('/files/sites/index.html',{root:__dirname});
})


app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server listening at http://localhost:${port}`) //shows server address at server start
    }
});