require('dotenv').config({ override: true });
const express = require('express');
const app = express();
const PORT = process.env.PORT3;

app.get('/', (req, res) => {
    res.send(`Hello from Backend 1 on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Backend 1 running on port ${PORT}`);
});