require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { SERVER_PORT } = process.env;
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());
app.use(express.static('./'))


// app.listen(4540, () => {
//     console.log("Listening on port 4540")
// })
app.listen(SERVER_PORT, () =>
    console.log(`${SERVER_PORT} barrels of brite beer!`)
  );