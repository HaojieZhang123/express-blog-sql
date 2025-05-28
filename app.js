const express = require('express');
const app = express();
const port = 3000;

// router
const router = require('./routers/postsRouter');

// middlewares
app.use(express.static('public'));
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('posts landing page!');
});
app.use('/posts', router);

// server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});