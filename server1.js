require('dotenv').config();
const express = require('express');
const app = express();
const PORT1 = process.env.PORT1;

app.get('/', (req, res) => {
    res.send(`Hello from Backend 1 on port ${PORT1}`);
});

app.listen(PORT1, () => {
    console.log(`Backend 1 running on port ${PORT1}`);
});