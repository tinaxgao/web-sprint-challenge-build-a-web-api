const express = require('express');
const server = express();

server.use(express.json());

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

server.get("/api/users", (req, res) => {
    res.json([
      { id: 1, username: "foo", password: "p123" },
      { id: 2, username: "bar", password: "p456" },
      { id: 3, username: "foobar", password: "p789" },
    ]);
  });

module.exports = server;
