//path require
const path = require('path');
const app = express();
//const express json
const express = require('express');

//port
app.listen(3000, () => {
  console.log('App web-server listening on port 3000');
});


// DEFINES THE MAIN ENTRY POINT
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
// DEFINES A FOLDER FOR THE STATIC FILES
app.use(express.static('public'));

