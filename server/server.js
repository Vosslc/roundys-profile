require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { SERVER_PORT } = process.env;
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());
app.use(express.static('./'))

// ! This tells express to look for a build folder. The __dirname variable tells it to start at the current file where Node is running (i.e., your server file), and /../build tells it to then go up one file and into a build folder. app.use( express.static( `${__dirname}/../build` ) );
app.use( express.static( `${__dirname}/../build` ) );
// !END
// ? use code below --->If you are using React Router's browserHistory, you'll need to use Node's built-in path.join() 
// const path = require('path'); // Usually moved to the start of file
// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });
// ?end

app.listen(SERVER_PORT, () =>
    console.log(`${SERVER_PORT} barrels of brite beer!`)
  );