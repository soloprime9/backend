// importing express
const express = require('express');
const UserRouter = require('./routers/userRouter');
const PostRouter = require("./routers/postRouter");

// create an express app
const app = express();
const port = 5000;

// middleware
app.use(express.json());
app.use('/user', UserRouter);
app.use("/post", PostRouter);

// routes or endpoints
app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('response from add');
});

// getall
// delete

// starting the server
app.listen(port, () => { console.log('Server started') });
