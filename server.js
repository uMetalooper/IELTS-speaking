const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000; // Use the port provided by Heroku or default to 5000

express()
  .use(express.static(path.join(__dirname, 'public'))) // Serve files from the 'public' directory
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
