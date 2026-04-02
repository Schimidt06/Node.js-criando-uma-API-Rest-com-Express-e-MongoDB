import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Cursando Express API');
});

export default app;