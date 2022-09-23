const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
// const port = process.env.PORT ?? 3001;
const port = 80;

const router = require('./api/routes/router');

// Serving static files from folder 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Parse JSON bodies (from requests)
app.use(bodyParser.json());

// Include the routes
app.use('/api', router);

// Parse urlencoded bodies (for form data)
app.use(bodyParser.urlencoded({
    extended: true
}));


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