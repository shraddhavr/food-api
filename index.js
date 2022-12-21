import express from 'express';

const app = express();
app.use(express.json());


app.get('/coffee', (req, res) => {
    res.send('coffee is good');
})

app.listen(5000, () => {
    console.log('Listening on port 5000');
});
