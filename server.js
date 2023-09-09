const express = require('express');

const app = express();
const PORT = 3000;

const path = require('path');

app.use(express.static('./public/'));

app.use(`/*`, (req, res) => {
    res.sendFile(path.join(__dirname, `/public/index.html`))
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
}); 
