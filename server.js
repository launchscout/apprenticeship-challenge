var express = require('express');

// Create app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('build'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
